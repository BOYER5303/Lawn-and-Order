import React, {Fragment} from 'react';
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
  .post("http://localhost:4000/charge", body)
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
    label="Subscribe" //Component button text
    name="Lawn and Order" //Modal Header
    description="Six month subscription."
    panelLabel="Join Now" //Submit button in modal
    amount={6000} //Amount in cents $9.99
    token={onToken}
    stripeKey={publishableKey}
    billingAddress={false}
  />
);
};

export default stripeBtn;