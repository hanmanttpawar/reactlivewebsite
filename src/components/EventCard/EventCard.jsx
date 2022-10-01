import React from "react";
import "./EventCard.css";

const EventCard = ({ image, title, date, venue }) => {
  
  return (
    <div className="event_card">
      <img src={image} alt="Country_image" />
      <p>{title}</p>
      <p>{date}</p>
      <p>{venue}</p>
      <div className="register_button"> Register now</div>
    </div>
  );
};

export default EventCard;
