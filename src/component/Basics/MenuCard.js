import React from "react";
function truncate(string, n) {
  return string?.length > n ? string.substr(0, n - 1) + "..." : string;
}
const MenuCard = ({ menu: { id, name, category, image, description } }) => {
  console.log(image);
  return (
    <div>
      <div className="card-container" key={id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{id}</span>
            <span className="card-author subtle"></span>
            <h2 className="card-title">{name}</h2>
            <span className="card-description subtle">
              {truncate(description, 140)}
            </span>
            <div className="card-read">Read</div>
            <img src={image} alt="images" className="card-media" />
            <span className="card-tag subtle">Order Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
