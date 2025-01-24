
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./AppointmentDetails.module.css"; // Import the module CSS

const AppointmentDetails = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("7:30 - 8:00 PM");
  const [speciality, setSpeciality] = useState("Gynecology");

  const timeSlots = [
    "6:00 - 6:30 PM",
    "6:30 - 7:00 PM",
    "7:00 - 7:30 PM",
    "7:30 - 8:00 PM",
  ];

  // Format the selected date for display
  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <div className={styles.appointmentDetailsContainer}>
      {/* Heading */}
      <h2 className={styles.appointmentDetailsHeader}>Appointment Details</h2>

      {/* Three sections */}
      <div className={styles.appointmentDetails}>
        {/* Calendar Section */}
        <div className={`${styles.appointmentSection} ${styles.calendarSection}`}>
          <label className={styles.label}>Choose Appointment Date *</label>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            minDate={new Date()} // Prevent selecting dates before today
            tileClassName={({ date, view }) =>
              date.toDateString() === new Date().toDateString()
                ? styles.reactCalendarTileNow
                : null
            }
            className={styles.reactCalendar}
          />
        </div>

        {/* Time Slot Section */}
        <div className={styles.appointmentSection}>
          <label className={styles.label}>Preferred Appointment Time *</label>
          <div className={styles.slots}>
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`${styles.slot} ${
                  selectedSlot === slot ? styles.slotSelected : ""
                }`}
                onClick={() => handleSlotSelection(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          <form className={styles.selectedInfoForm}>
            <p className={styles.selectedInfoFormParagraph}>
              <strong>Selected Date:</strong> {formattedDate}
            </p>
            <p className={styles.selectedInfoFormParagraph}>
              <strong>Selected Time:</strong> {selectedSlot}
            </p>
          </form>
        </div>

        {/* Speciality Section */}
        <div className={styles.appointmentSection}>
          <label className={styles.label}>Speciality</label>
          <select
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            className={styles.specialityDropdown}
          >
            <option value="Gynecology">Gynecology</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
