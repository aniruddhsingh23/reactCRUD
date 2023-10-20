import React, { useState } from 'react';
import axios from 'axios';

const PaymentGateway = () => {
  const [buy, setBuy] = useState({
    amount: 10,
  });

  const handleAmountChange = (event) => {
    // Update the 'amount' state when the input field changes
    setBuy({ ...buy, amount: event.target.value });
  };

  const initPayment = async (data) => {
    const options = {
      key: "rzp_test_1OXW88PjbXA5Iu",
      amount: buy.amount * 100, // Use the 'amount' from state
      currency: "INR",
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "https://react-crud-v3am.onrender.com/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "https://react-crud-v3am.onrender.com/api/payment";
      const response = await axios.post(orderUrl, { amount: buy.amount });
      const data = response.data;
      initPayment(data.data);
    } catch (error) {
      console.error("Error while initiating payment:", error);
      // Handle the error further or display a user-friendly message.
    }
  };
  

  return (
    <div>
      <h2 data-aos="slide-down" style={{ display: "flex", justifyContent: "center", marginBottom: "2em", marginTop: "5em" }}>
        If you like our work, Please Donate
      </h2>
      <div className='payment' data-aos="zoom-in">
        <div className='pymnt-container'>
          <p className='pymnt-price'>
            Donate : <span> &#x20B9; {buy.amount} </span>
          </p>
          <input
            type="number"
            value={buy.amount}
            onChange={handleAmountChange}
            placeholder="Enter Amount"
          />
          <button onClick={handlePayment} className="dnt-btn">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
