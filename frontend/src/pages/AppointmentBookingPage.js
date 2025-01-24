import React from "react";
import AppointmentDetails from "../components/OnlineBooking/AppointmentDetails";
import DoctorList from "../components/OnlineBooking/DoctorList";
import "./AppointmentBookingPage.css";

const AppointmentBookingPage = () => {
  return (
    <div className="appointment-booking-page">
      <AppointmentDetails />
      <DoctorList />
    </div>
  );
};

export default AppointmentBookingPage;
