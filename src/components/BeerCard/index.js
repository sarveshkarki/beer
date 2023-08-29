import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./beer.css";

const BeerCard = ({ name, image, tag, desc, ingredients }) => {
  const ingredientKeys = Object.keys(ingredients);

  return (
    <>
      <div className="card mt-3 mb-3">
        <div>
          <OverlayTrigger
            overlay={
              <Tooltip id={`tooltip-top`}>
                {ingredientKeys.map((ingredients, index) => (
                  <span key={index}>
                    {ingredients}
                    {index !== ingredientKeys.length - 1 && ", "}
                  </span>
                ))}
              </Tooltip>
            }
          >
            <img className="card-img" src={image} alt="beer-img" />
          </OverlayTrigger>
        </div>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-tag">{tag}</p>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default BeerCard;
