
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './PaymentPage.module.css';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    weight: "",
    height: "",
    allergies: "",
    chronicCondition: "",
    prescriptionMeds: "",
    address: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userEmail =
          location.state?.userEmail || JSON.parse(localStorage.getItem("user")).email;

        const response = await axios.get(`http://localhost:5000/api/profile/${userEmail}`);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setError("Failed to load profile data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [location.state]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSaveAndPay = async (e) => {
    e.preventDefault();
    try {
      // Update user details
      await axios.post("http://localhost:5000/api/update-user", {
        email: profileData.email,
        updates: profileData,
      });

      const res = await loadRazorpayScript();
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      // Create Razorpay order
      const paymentResponse = await fetch("http://localhost:5000/create-order", {
        method: "POST",
      });

      const paymentData = await paymentResponse.json();
      const options = {
        key: "rzp_test_GwAywrzy2L8muN",
        amount: paymentData.amount,
        currency: "INR",
        order_id: paymentData.id,
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          navigate("/user"); // Redirect to home screen after payment
        },
        prefill: {
          name: profileData.name,
          email: profileData.email,
          contact: profileData.phone,
        },
        theme: {
          color: "#DE1B51",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Error during update or payment:", err);
      alert("Failed to update user details or process payment.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const fields = [
    { label: "Name", name: "name", type: "text", readOnly: true },
    { label: "Address", name: "address", type: "text" },
    { label: "Weight", name: "weight", type: "number" },
    { label: "Height", name: "height", type: "number" },
    { label: "Age", name: "age", type: "number" },
    { label: "Phone", name: "phone", type: "text" },
    { label: "Allergies", name: "allergies", type: "text" },
    { label: "Chronic Condition", name: "chronicCondition", type: "text" },
    { label: "Prescription Medications", name: "prescriptionMeds", type: "text" },
  ];

  return (
    <div className={styles.paymentPage}>    <div className={styles.paymentContainer}>
    <h2>Payment Details</h2>

    <form className={styles.paymentForm} onSubmit={handleSaveAndPay}>
      <div className={styles.paymentSection}>
        <h3>Patient Card</h3>
        <div className={styles.paymentRow}>
          {fields.map((field) => (
            <label key={field.name} className={styles.paymentLabel}>
              {field.label}:
              <input
                type={field.type}
                name={field.name}
                value={profileData[field.name] || ""}
                onChange={handleChange}
                readOnly={field.readOnly}
                className={styles.paymentInput}
              />
            </label>
          ))}
        </div>
      </div>

      <div className={styles.paymentSection}>
        <h3>Payment</h3>
        <div className={styles.paymentContent}>
          <div className={styles.paymentRow}>
            <div><strong>Name:</strong> {profileData.name}</div>
            <div><strong>Payment Mode:</strong> UPI</div>
            <div><strong>Contact Details:</strong> {profileData.phone}</div>
          </div>
          <div className={`${styles.paymentRow} ${styles.rightAlign}`}>
            <div className={styles.paymentDetails}>
              <p><strong>Appointment Fees:</strong></p>
              <p className={styles.highlight}>Rs 175.00</p>
              <p>Subtotal:</p>
              <p className={`${styles.highlight} ${styles.totalAmount}`}>Rs 175.00</p>
            </div>
          </div>
        </div>
      </div>

      <button className={styles.paymentButton} type="submit">Save & Pay Now</button>
    </form>
  </div>
  </div>

  );
};

export default PaymentPage;
