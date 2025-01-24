import React from "react";
import "./FeedbackSection.css";

const FeedbackSection = () => {
  return (
    <div className="feedback-section">
      {/* Feedback Card 1 */}
      <div className="feedback-card">
        <div className="feedback-header">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            className="user-image"
          />
          <div className="commentor-name">John Doe</div>
        </div>
        <p className="review-text">
          Excellent service and a very understanding doctor! Highly recommended.
        </p>
        <div className="feedback-footer">
          <span className="time-ago">2 days ago</span>
          <button className="reply-button">Reply</button>
        </div>
      </div>

      {/* Feedback Card 2 */}
      <div className="feedback-card">
        <div className="feedback-header">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            className="user-image"
          />
          <div className="commentor-name">Jane Smith</div>
        </div>
        <p className="review-text">
          The doctor was very patient and explained everything clearly. I felt
          very comfortable during my visit.
        </p>
        <div className="feedback-footer">
          <span className="time-ago">1 week ago</span>
          <button className="reply-button">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
