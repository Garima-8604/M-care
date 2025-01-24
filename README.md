
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

### Google Cloud Setup

To integrate Google Maps and OAuth2.0 in the M-CARE project, you'll need to create and configure credentials in the Google Cloud Console:

1. **Enable APIs**: 
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Select your project or create a new one.
   - Navigate to **API & Services > Library**.
   - Enable the following APIs:
     - Google Maps JavaScript API
     - Google Places API
     - Google Geocoding API
     - OAuth 2.0 Client IDs

2. **Create OAuth 2.0 Credentials**:
   - In the Google Cloud Console, go to **API & Services > Credentials**.
   - Click on **Create Credentials** and select **OAuth 2.0 Client ID**.
   - Configure the consent screen and application type (e.g., Web Application).
   - Add your authorized redirect URIs (for your React app or backend as needed).

3. **Obtain API Key and OAuth Credentials**:
   - After creating the credentials, you will get an **API Key** for Google Maps services and **OAuth 2.0 Client ID** and **Client Secret** for authentication.

4. **Add API Key to your Project**:
   - Add the API Key to .env files as said above for Google Maps integration. Be sure to keep the key secure and restrict its usage to your domain in the Google Cloud Console.

---

This should provide clear instructions on setting up Google Cloud credentials and linking them to your project.
### Frontend:
- **React**: Frontend library

### Backend:
- **Node.js**: JavaScript runtime
- **Express.js**: Backend framework
- **MongoDB**: Database
- **dotenv**: Environment variable management

---
