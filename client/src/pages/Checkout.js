import React, { useState, useEffect } from "react";

const Checkout = () => {
  // const [isProcessing, setProcessingTo] = useState(false);
  // const [checkoutError, setChecoutError] = useState();
  let sessionId;
  const stripe = window.Stripe(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    fetch("https://todoist-server.herokuapp.com/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(function (r) {
        return r.json();
      })
      .then(function (response) {
        sessionId = response.id;
      });
  });

  const handleClick = (e) => {
    e.preventDefault();
    stripe.redirectToCheckout({
      sessionId: sessionId,
    });
  };

  return (
    <div className="homeWrapper">
      <section>
        <div className="heroWrapper">
          <h1>Join Todoist Gold</h1>
          <a onClick={handleClick}>Let's do this!</a>
        </div>
        <img
          className="home-hero"
          src="/image/fish-trophy.png"
          alt="cartoon cat and rat looking at each other"
        />
      </section>
    </div>
  );
};

export default Checkout;
