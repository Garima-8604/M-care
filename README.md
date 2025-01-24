
## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or above recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or in the cloud)
- [Git](https://git-scm.com/)

---

## Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/Garima-8604/M-care
cd M-CARE
```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory:
   ```bash
   touch .env
   ```
   Add the following environment variables:
   ```env
GOOGLE_API_KEY=<your-google-api-key>
CLIENT_ID=<your-client-id>
CLIENT_SECRET=<your-client-secret>
REDIRECT_URI='http://localhost:3000'
GOOGLE_CLIENT_ID = <your-google-client-id>
MONGO_URI = <your-mongodb-connection-uri>
RAZORPAY_KEY_ID = <your-razorpay-key-id>
RAZORPAY_KEY_SECRET = <your-razorpay-key-secret>

   ```

4. Start the backend server:
   ```bash
   node proxy.js
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the frontend directory:
   ```bash
   touch .env
   ```
   Add the following environment variable:
   ```env
   REACT_APP_GOOGLE_GEOCODE_API_KEY=<your-google-geocode-api-key>
   REACT_APP_GOOGLE_PLACES_API_KEY=<your-google-places-api-key>
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

---

## How to Use

1. Open the backend server at `http://localhost:5000`.
2. Open the frontend in your browser at `http://localhost:3000`.
---

## Key Dependencies

### Frontend:
- **React**: Frontend library

### Backend:
- **Node.js**: JavaScript runtime
- **Express.js**: Backend framework
- **MongoDB**: Database
- **dotenv**: Environment variable management

---
