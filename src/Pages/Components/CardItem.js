import React from "react";

const CardItem = ({ img, name, age }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <p>
        {name}, {age}
      </p>
    </div>
  );
};

export default CardItem;
