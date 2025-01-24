import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Locator from "./pages/Locator";
import DoctorInfoPage from "./pages/DoctorInfoPage";
import Payment from "./pages/Payment";
import SignUpPage from "./pages/SignUpPage";
import PaymentPage from "./pages/PaymentPage";
import CompleteProfile from "./pages/CompleteProfile";
import AppointmentBookingPage from "./pages/AppointmentBookingPage";
import OnlineDoctorPage from "./pages/OnlineDoctorPage";
import ConfirmAppointment from "./pages/ConfirmAppointment";
import Successful from "./pages/Successful";
const clientId = "933545517698-rrvj8drn4d954vu26h5saiu7hpf4h6rq.apps.googleusercontent.com";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/user" element={<LandingPage />} />
            <Route path="/locator" element={<Locator />} />
            <Route path="/:hospitalName" element={<DoctorInfoPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/paymentpage" element={<PaymentPage />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/appointment" element={<AppointmentBookingPage />} />
            <Route path="/online-doctor" element={<OnlineDoctorPage />} />
            <Route path="/confirm-appointment" element={<ConfirmAppointment />} />
            <Route path="/successful" element={<Successful />} />


          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
