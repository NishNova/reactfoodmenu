import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

const uniquelist = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
];

console.log(uniquelist);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  console.log(menuData);
  const filterItem = (category) => {
    const updatedlist = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedlist);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}
          >
            BREAKFAST
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("lunch")}
          >
            LUNCH
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("evening")}
          >
            EVENING
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("dinner")}
          >
            DINNER
          </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            ALL
          </button>
        </div>
      </nav>
      <main>
        <section className="main-card--container">
          {menuData.map((menu) => (
            <MenuCard menu={menu} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Restaurant;
