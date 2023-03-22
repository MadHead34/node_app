// import express from 'express';
// import { MongoClient as mongoose } from 'mongoose';
// import House, { findHome } from './node_app/house.model';
const express = require('express');
const mongoose = require('mongoose');
const home = require('./house.model');
const cors = require('cors');


mongoose.connect('mongodb+srv://mingh:MR52@cluster0.t3yxabv.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});



// Create a new Express application
const app = express();
app.use(cors());

home();
// Define a route for retrieving all houses
app.get('/api/test', async (req, res) => {
  const houses = await home.find();
  res.json(houses);
});

// Start the Express application
app.listen(8000, () => {
  console.log('Server listening on port 8000');
});