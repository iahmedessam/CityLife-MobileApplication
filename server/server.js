const express = require("express");
const app = express();
const { resolve } = require("path");
const dotenv = require("dotenv");
const stripe = require("stripe")("sk_test_51NKzz8GrS3wxzFb1q5jxxySlpxWGFOaa4CIwH7qExCI5wn1Vvh0Zb2xsTXhKRVFvy3j2YhYBBnxKgd5dOvx2PPK100bbowRaKI");
dotenv.config();

app.use(express.static(resolve(__dirname, process.env.STATIC_DIR)));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://bvbbcbvv.onrender.com");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// app.post("/create-customer", async (req, res) => {
//   try {
//     const customer = await stripe.customers.create({
//       email: req.body.email,
//       source: req.body.paymentMethod,
//     });
//     res.send({
//       customerId: customer.id,
//     });
//   } catch (error) {
//     console.error("Error creating customer:", error);
//     res.status(500).json({ error: "Failed to create customer" });
//   }
// });









app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount: 1000,
      // payment_method: req.body.paymentMethod, // Include the paymentMethod in the request body
      confirm: true, // Confirm the payment intent immediately
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Failed to create payment intent" });
  }
});
















app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(5253, () => {
  console.log("Node server listening at https://bvbbcbvv.onrender.com");
});