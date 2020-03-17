import React from "react";

const Success = () => {
  return (
    <div>
      <section>
        <div className="heroWrapper">
          <h1>Payment Successful!</h1>
          <a href="https://elated-kowalevski-c4248c.netlify.com/">
            return home
          </a>
        </div>
        <img
          className="home-hero"
          src="/image/success.png"
          alt="green success check mark"
        />
      </section>
    </div>
  );
};

export default Success;
