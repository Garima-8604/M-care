import React from 'react';
import axios from 'axios';

const Payment = () => {
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });
      };
    
  const handlePayment = async () => {
    // Call your backend to create an order
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }


    const response = await fetch('http://localhost:5000/create-order', { method: 'POST' });
    const data = await response.json();

    const options = {
      key: 'rzp_test_GwAywrzy2L8muN', // Replace with your Razorpay key
      amount: data.amount, // Amount in paise (100 = ₹1)
      currency: 'INR',
      order_id: data.id, // Order ID returned from backend
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default Payment;
