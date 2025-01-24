import React, { useState } from "react";
import axios from "axios";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", formData);
      console.log("SignUp Success:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/user", { state: { userEmail: response.data.user.email } });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      console.log("token: ");
      console.log(token);
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
    <div className={styles.signupContainer}>
      <div className={styles.signupHeaderContainer}>
        <img
          src="Maskgroup.png"
          alt="M-Care Logo"
          className={styles.signupLogoHeader}
        />
        <h1 className={styles.signupTitleHeader}>M-CARE</h1>
      </div>
      <div className={styles.signupBox}>
        <h2 className={styles.signupHeader}>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <label className={styles.signupLabel}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className={styles.signupInput}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className={styles.signupLabel}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Eg. name@gmail.com"
            className={styles.signupInput}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className={styles.signupLabel}>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className={styles.signupInput}
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.signupButton}>
            Sign Up
          </button>
        </form>

        <div className="signupFooter">
          <p>
            Already have an account?{" "}
            <a href="/signin" className={styles.createAccountLink}>
              Sign In
            </a>
          </p>
        </div>
        <p className={styles.orDivider}>
          <span className={styles.line}></span> OR <span className={styles.line}></span>
        </p>

        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
        />

        <p className={styles.termsText}>
          By signing up, you acknowledge that you read & understand and agree to
          M-care{" "}
          <a href="#" className={styles.termsLink}>
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className={styles.privacyLink}>
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
