import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const PaystackPayment = ({ email, amount }) => {
  const publicKey = "pk_test_a38a02bd65fae110af7ec82ff54aa2ad5823b0c0"; // Replace with actual key
  const [paymentStatus, setPaymentStatus] = useState(null);

  const componentProps = {
    email,
    amount: amount * 100, // Convert GHS to pesewas
    currency: "GHS",
    publicKey,
    text: "Buy Now",
    onSuccess: (response) => {
      setPaymentStatus("Payment Successful!");
      console.log("Payment Success:", response);
    },
    onClose: () => {
      setPaymentStatus("Payment Closed!");
    },
  };

  return (
    <div className="flex flex-col items-center">
      {/* Styled Paystack Button */}
      <PaystackButton
        {...componentProps}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
      />
      {paymentStatus && <p className="mt-2 text-sm text-gray-600">{paymentStatus}</p>}
    </div>
  );
};

export default PaystackPayment;
