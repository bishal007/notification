import React, { useState } from "react";
import "./NotificationExample.css";

function NotificationExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="notification-container">
      <button onClick={openModal}>Show Notification</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Notification</h2>
            <p style={{ color: "red" }}>
              This is a dummy notification message!
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationExample;
