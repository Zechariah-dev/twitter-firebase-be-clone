import express from "express";
import { initializeApp } from "firebase/app";
import admin from "firebase-admin";
import functions from "firebase-functions";
require("dotenv").config();

const app = express();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const firebase = initializeApp(firebaseConfig);

app.listen(process.env.PORT, () => {
  console.log("serving up and running");
});
