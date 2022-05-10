import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";
import dotenv from "dotenv";

// app config
const app = express();
dotenv.config();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:passwordpassword@cluster0.eehha.mongodb.net/owners?retryWrites=true&w=majority'


// middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
});

// API endpoints
app.get("/", (req, res) => {
  res.status(200).send("working");
});

app.post("/puppy/cards", (req, res) => {
  const Card = req.body;

  Cards.create(Card, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/puppy/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => {
  console.log(`listening on localhost ${port}`);
});
