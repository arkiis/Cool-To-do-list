const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const stripe = require("stripe")(process.env.REACT_APP_SECRET_KEY);

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/charge", (req, res) => {
  (async () => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      subscription_data: {
        items: [
          {
            plan: "plan_GtnK4NS2K1Y1ii",
          },
        ],
      },
      success_url:
        "https://elated-kowalevski-c4248c.netlify.com/premium/success",
      cancel_url: "https://elated-kowalevski-c4248c.netlify.com/",
    });
    res.send({ id: session.id });
  })();
});

app.listen(port, (err) => {
  if (err) throw err;
});
