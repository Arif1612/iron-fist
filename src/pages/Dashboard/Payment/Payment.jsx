import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import "./CheckOutForm.css";
import useStudentCart from "../../../hooks/useStudentCart";
import usePayment from "../../../hooks/usePayment";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [payments] = usePayment();
  const [studentCarts] = useStudentCart();
  console.log(studentCarts);
  const total = studentCarts.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={studentCarts} price={price}></CheckoutForm>
      </Elements>
      <p className="text-xl font-bold text-center">Payment History</p>
      <div className="w-full  m-8">
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>TransactionId</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment,index) => (
                <tr key={payment._id}  className="bg-base-200">
                  <th>{index+1}</th>
                  <th>{payment.email}</th>
                  <td>{payment.transactionId}</td>
                  <td>${payment.price}</td>
                  <td>{payment.quantity}</td>
                  <td>{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payment;
