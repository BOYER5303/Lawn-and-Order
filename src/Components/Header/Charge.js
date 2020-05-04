import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const stripeBtn = () => {
  const publishableKey = "pk_test_MWKkMdpEOc8HJBlSV0Byab1200IWGMPxFe";
   
  const onToken = token => {
    const body = {
      amount: 999,
      token: token
  };

  axios
  .post("http://localhost:6000/charge", body)
  .then(response => {
    console.log(response);
    alert("Payment Success");
  })
  .catch(error => {
    console.log("Payment Error: ", error);
    alert("Payment Error");
  });
};

return (
  <StripeCheckout
    label="Subscribe" 
    name="Lawn and Order" 
    description="Six month subscription."
    panelLabel="Join Now" 
    amount={6000} 
    token={onToken}
    stripeKey={publishableKey}
    billingAddress={true}
  />
);
    }
export default stripeBtn