import React, { Component } from "react";
import "./card.css";

const Card = ({ id, title, description, link }) => {
  return (
    <div className="card">
      <img
        className="card-img"
        alt="image project"
        src="https://via.placeholder.com/400x200"
      ></img>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
export default Card;
