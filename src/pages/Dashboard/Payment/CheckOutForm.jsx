import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "./CheckOutForm.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import "./CheckOutForm.css";

const CheckoutForm = ({ cart, price }) => {
  // console.log(cart, price);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      // update the student cart available seats
      const updateSeats = {
        studentCarts: cart.map((item) => ({
          classId: item.classId,
          subName: item.subName,
          email: item.email,
        })),
      };
      // Send a PATCH request for each class to update the available seats
      updateSeats.studentCarts.forEach((classItem) => {
        const classId = classItem.classId;
        axiosSecure
          .patch(`/classes/${classId}/update-seats`)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.error(error);
          });
      });

      // save payment information to the server
      function formatDate(date) {
        const options = { day: "numeric", month: "short", year: "numeric" };
        const formattedDate = new Date(date).toLocaleDateString(
          undefined,
          options
        );

        const day = new Date(date).getDate();
        const suffix = getDaySuffix(day);
        const monthYear = formattedDate.replace(day, "").trim();

        return `${day}${suffix} ${monthYear}`;
      }

      function getDaySuffix(day) {
        if (day === 1 || day === 21 || day === 31) {
          return "st";
        } else if (day === 2 || day === 22) {
          return "nd";
        } else if (day === 3 || day === 23) {
          return "rd";
        } else {
          return "th";
        }
      }
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: formatDate(new Date()),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        studentCarts: cart.map((item) => ({
          id: item._id,
          classId: item.classId,
          price: item.price,
          availableSeats: item.availableSeats,
          instructorName: item.instructorName,
          image: item.image,
          subName: item.subName,
          email: item.email,
          duration: item.courseDuration,
          date: formatDate(new Date()),
          totalSeats: item.totalSeats,
          noOfStudents: item.totalSeats - item.availableSeats,
        })),
        status: "pending",
      };

      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.deleteResult.deletedCount > 0) {
          // display confirm
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Payment Successful ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div className="w-full  m-8">
      <h1 className="text-left ml-20 text-xl font-bold">
        Total Price: $ {price}
      </h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
