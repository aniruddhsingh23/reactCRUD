import React from 'react';
import payment_img from "../images/payImg.jpg"

const PaymentGateway = () => {

  return (
    <div>
      <h2 data-aos="slide-down" style={{ display: "flex", justifyContent: "center", marginBottom: "2em", marginTop: "5em", marginLeft: "70px" }}>
        If you like our work, Please Donate
      </h2>
      <div className='payImg'>
        <img 
          src={payment_img}
          alt="Logo"
          style={{
            height: "100%",
            width: "100%",
            border: "0.2em solid $blue",
            borderRadius: "2em"
          }}
        />
      </div>
    </div>
  );
};

export default PaymentGateway;
