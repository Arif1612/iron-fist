import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import "./CheckOutForm.css";
import useStudentCart from "../../../hooks/useStudentCart";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [studentCarts] = useStudentCart();
  console.log(studentCarts);
  const total = studentCarts.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={studentCarts} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
