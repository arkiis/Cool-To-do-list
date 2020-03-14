import React, { useState, useEffect } from "react";

const Checkout = ({ price }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setChecoutError] = useState();
  let sessionId;
  const stripe = window.Stripe("pk_test_2do6pJchuMIGtZ2cqrLgDjM300sB7DRzbF");

  useEffect(() => {
    fetch("/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    })
      .then(function(r) {
        return r.json();
      })
      .then(function(response) {
        sessionId = response.id;
        console.log(response.id);
      });
  });

  const handleClick = e => {
    e.preventDefault();
    stripe.redirectToCheckout({
      sessionId: sessionId
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Buy</button>
    </div>
  );
};

export default Checkout;
