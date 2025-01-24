
import React, { useState } from "react";
import "./SlotsSection.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SlotsSection = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="slots-container">
      <div className="date-picker-section">
        <label htmlFor="date-picker" className="date-picker-label">
          Select Date
        </label>
        <DatePicker
          id="date-picker"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd MMMM yyyy"
          placeholderText="Eg. 02 January 2025"
          className="date-picker-input"
        />
      </div>

      <div className="available-slots-section">
        <h3 className="slots-heading">Available Slots</h3>
        <div className="available-slots">
          {[
            "6:00 - 6:30 PM",
            "6:30 - 7:00 PM",
            "7:00 - 7:30 PM",
            "7:30 - 8:00 PM",
          ].map((slot, index) => (
            <button
              key={index}
              className={`slot-button ${
                selectedSlot === slot ? "selected" : ""
              }`}
              onClick={() => handleSlotClick(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlotsSection;
