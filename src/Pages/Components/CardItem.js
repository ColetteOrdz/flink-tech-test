import React from "react";
import "../Components/Styles/CardItem.css"

const CardItem = ({ img, name, age }) => {
  return (
    <div className="card">
      <img src={img} className="profile-img" alt={name} />
      <p>
        {name}, {age}
      </p>
    </div>
  );
};

export default CardItem;
