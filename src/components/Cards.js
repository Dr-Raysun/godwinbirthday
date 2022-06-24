import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>viewing some images of Godwin</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="imagesG/img-4.jpg"
              text="Enjoying the moment doing things he love "
              label="At Work"
              path="/services"
            />
            <CardItem
              src="imagesG/img-3.jpg"
              text="Doing the ministry of God "
              label="At church"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="imagesG/img-2.jpg"
              text="The youthful age "
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="imagesG/img-14.jpg"
              text="Godwin in office making impact in his generations"
              label="In Office"
              path="/products"
            />
            <CardItem
              src="imagesG/img-8.jpg"
              text="Godwin feeling himself at work"
              label="Site"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
