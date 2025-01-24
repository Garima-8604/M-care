import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleManualLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/manual-login", {
        email,
        password,
      });
  
      console.log("User data:", response.data.user);
  
      // Save user data to local storage or handle it as needed
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
      // Pass email to LandingPage
      navigate("/user", { state: { userEmail: response.data.user.email } });
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };
  


  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;

      // Send the token to the backend for verification
      const response = await axios.post("http://localhost:5000/api/verify-google-token", {
        token,
      });

      console.log("User data:", response.data.user);

      // Save user data to local storage or handle it as needed
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/user", { state: { profileData: response.data.user } });
    } catch (error) {
      console.error("Token verification failed:", error.response?.data?.message || error.message);
    }
  };

  const handleGoogleLoginFailure = () => {
    console.error("Google Sign-In failed");
  };

  return (
    <div className="signin-container">
      <div className="signin-header-container">
        <img
          src="Maskgroup.png"
          alt="M-Care Logo"
          className="signin-logo-header"
        />
        <h1 className="signin-title-header">M-CARE</h1>
      </div>
      <div className="signin-box">
        <h2 className="signin-header">Sign in</h2>

        <form className="signin-form" onSubmit={handleManualLogin}>
          <label className="signin-label">Email</label>
          <input
            type="email"
            placeholder="Eg. name@gmail.com"
            className="signin-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="signin-label">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="signin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="signin-button">
            Sign in
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <div className="signin-footer">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="create-account-link">
              Create Account
            </a>
          </p>
        </div>

        <p className="or-divider">
          <span className="line"></span> OR <span className="line"></span>
        </p>

        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
        />

        <p className="terms-text">
          By signing up, you acknowledge that you read & understand and agree to
          M-care{" "}
          <a href="#" className="terms-link">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="privacy-link">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignIn;
