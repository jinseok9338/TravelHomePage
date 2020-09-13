import React from "react";
import CardItem from "./carditem";
import "./cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out this EPIC Destinations!</h1>
      <div className="card__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="img/img-9.jpg"
              text="Explore the hidden waterfalll deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="img/img-2.jpg"
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="img/img-9.jpg"
              text="Explore the hidden waterfalll deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="img/img-2.jpg"
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="img/img-2.jpg"
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
