const { OAuth2Client } = require('google-auth-library');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { MongoClient } = require('mongodb'); 
const Razorpay = require('razorpay');
const bcrypt = require('bcrypt');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const MONGO_URI = process.env.MONGO_URI;
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const mongoClient = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Function to get photo URL from Google Places API
const getPhotoUrl = (photoReference) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${GOOGLE_API_KEY}`;
};

app.get('/api/hospitals', async (req, res) => {
  const { location } = req.query;

  if (!location) {
    return res.status(400).send('Location is required');
  }

  try {
    // Geocode the location to get latitude and longitude
    const geocodeResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_API_KEY}`
    );
    const result = geocodeResponse.data.results[0];
    const lat = result.geometry.location.lat;
    const lng = result.geometry.location.lng;

    // Fetch hospitals using Google Places API
    const placesResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=hospital&key=${GOOGLE_API_KEY}`
    );

    const hospitals = placesResponse.data.results.map((hospital) => ({
      name: hospital.name,
      vicinity: hospital.vicinity,
      rating: hospital.rating,
      opening_hours: hospital.opening_hours,
      photoUrl: hospital.photos ? getPhotoUrl(hospital.photos[0].photo_reference) : null,
      lat: hospital.geometry.location.lat,
      lng: hospital.geometry.location.lng,
    }));

    res.json(hospitals);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching hospital data');
  }
});

app.post('/api/verify-google-token', async (req, res) => {
  const { token } = req.body;  // The token will be sent by the frontend

  try {
    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of your app
    });

    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload;  // Extract user details

    // Connect to MongoDB and insert user data
    await mongoClient.connect();
    const db = mongoClient.db('HospitalManagement');  // Replace with your database name
    const userCollection = db.collection('users');  // Use the collection name as per your requirement

    // Check if the user already exists in the database
    const existingUser = await userCollection.findOne({ email });

    if (!existingUser) {
      // If the user doesn't exist, create a new user
      await userCollection.insertOne({ id: sub, email, name, picture });

      // Return user data to frontend
      res.status(200).json({
        message: 'New user created successfully',
        user: { id: sub, email, name, picture },
      });
    } else {
      // If the user exists, just return the user data
      res.status(200).json({
        message: 'User already exists',
        user: existingUser,
      });
    }
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(400).json({ message: 'Invalid token', error: error.message });
  }
});




app.post('/create-order', async (req, res) => {
  try {
    const options = {
      amount: 17500, // Amount in paise (₹500)
      currency: 'INR',
      receipt: 'order_rcptid_11',
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/api/manual-login', async (req, res) => {
  const { email, password } = req.body;

  try {
    await mongoClient.connect();
    const db = mongoClient.db('HospitalManagement');
    const userCollection = db.collection('users');

    // Check if the user exists
    const user = await userCollection.findOne({ email }); 

    if (!user) {
      return res.status(404).json({ message: 'User does not exist. Please create an account.' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: { id: user.id, email: user.email, name: user.name, picture: user.picture },
    });
  } catch (error) {
    console.error('Error during manual login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Connect to MongoDB
    await mongoClient.connect();
    const db = mongoClient.db("HospitalManagement");
    const userCollection = db.collection("users");

    // Check if the user already exists
    const existingUser = await userCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const newUser = { name, email, password: hashedPassword };
    await userCollection.insertOne(newUser);

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Sign Up Error:", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
});

app.get("/api/profile/:email", async (req, res) => {
  const { email } = req.params;
  console.log("Received email:", email); // Log the received email

  try {
    // Find user by email
    await mongoClient.connect();
    const db = mongoClient.db("HospitalManagement");
    const userCollection = db.collection("users");
    const user = await userCollection.findOne({ email: email });



    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Optionally remove sensitive data (e.g., password)
    const { password, ...userData } = user;
    
    // Return the user profile data
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching profile data:", error); // Log the error
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.post('/api/update-user', async (req, res) => {
  const { email, updates } = req.body; // `email` identifies the user, `updates` contains new data to update
  console.log("Updates object:", updates);
  if (!email || !updates) {
    return res.status(400).json({ message: 'Email and updates are required.' });
  }

  try {
    await mongoClient.connect();
    const db = mongoClient.db('HospitalManagement'); // Replace with your DB name
    const userCollection = db.collection('users'); // Replace with your collection name

    // Remove the `_id` field from the `updates` object, if it exists
    delete updates._id;

    // MongoDB query to find and update the user with the given email
    const result = await userCollection.updateOne(
      { email }, // Find the user by their unique email
      { $set: updates } // Update fields in the `updates` object (merge into the existing document)
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'User not found or no changes made.' });
    }

    res.status(200).json({ message: 'User details updated successfully.' });
  } catch (error) {
    console.error('Error updating user details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/update-profile', async (req, res) => {
  const { email, age, weight, isPregnant, pregnancyDuration, allergies, chronicDiseases } = req.body;

  if (!email || !age || !weight) {
    return res.status(400).json({ message: "Age, weight, and email are required." });
  }

  try {
    await mongoClient.connect();
    const db = mongoClient.db("HospitalManagement");
    const userCollection = db.collection("users");

    // Find the user by email
    const user = await userCollection.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Update the user profile with the new data
    const updatedUser = {
      ...user,
      age,
      weight,
      isPregnant,
      pregnancyDuration,
      allergies,
      chronicDiseases,
    };

    await userCollection.updateOne(
      { email },
      { $set: updatedUser }
    );

    res.status(200).json({ message: "Profile updated successfully." });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
