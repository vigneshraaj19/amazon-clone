const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const stripe=require("stripe")
('sk_test_51LJalQSI39jpT9zPPC01Am4ZJNWjLS4WG3o9RiKavtcxXua32N85U0uRfId9x56Kmb42nFSWuzZIjsgDNaoqjhkh001jDYYkwe')

//app config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved  for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "inr",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-113d7/us-central1/api