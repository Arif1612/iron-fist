import React from "react";
import usePayment from "../../../hooks/usePayment";

const EnrolledClasses = () => {
  const [payments] = usePayment();
  console.log(payments);

  return (
      <div className="ml-20
    ">
      {payments.map((payment) => (
        <div key={payment._id}>
          <h2>Enrolled Classes: {payment.quantity}</h2>
          <p>Transaction ID: {payment.transactionId}</p>
          <p>Amount: {payment.price}</p>
          <p>Payment Date: {payment.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EnrolledClasses;
