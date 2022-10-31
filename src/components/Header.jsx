import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderImg from "../assets/HomeImg.svg";
import BuffetImg from "../assets/buffet.jpg";
import TruckImg from "../assets/camion.png";
import { useNavigate } from "react-router-dom";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

function Header() {
  const navigate = useNavigate();
  const [searchedItem, setSearchedItem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let headerImgEl = document.querySelector(".header__img--wrapper");
    headerImgEl.classList += " submitted";
    setLoading(true);
    localStorage.setItem("firstSearch", searchedItem)

    setTimeout(() => {
      navigate("/search");
    }, 1200);
  };

  function inputClick() {
    let headerImgEl = document.querySelector(".header__img--wrapper");
    if (headerImgEl.classList == "header__img--wrapper clicked") {
      headerImgEl.classList.remove("clicked");
    }
    headerImgEl.classList += " clicked";
  }

  return (
    <header>
      <div className="header__content">
        <div className="header__content--text">
          <h1 className="header__title">Best Recipe Search Engine in Perú!</h1>
          <h3 className="header__sub-title">
            FIND THE RECIPE YOU NEED TO PREPARE <br />
            THE BEST MEAL IN <span className="orange">MIAURI'S FOOD</span>
          </h3>
          <form className="input__wrapper">
            <input
              type="text"
              placeholder="Search Recipes by Name"
              className="header__input"
              onChange={(e) => setSearchedItem(e.target.value)}
              onClick={inputClick}
            />
            <button
              type="submit"
              className="header__btn btn__hover-effect click"
              onClick={handleSubmit}
            >
              {loading ? (
                <RotateLeftIcon className="input__icon loading" />
              ) : (
                <SearchIcon className="input__icon" />
              )}
            </button>
          </form>
        </div>
        <div className="header__img--wrapper">
          <img src={HeaderImg} alt="" className="header__img" />
          <div className="header__buffetImg">
            <img src={BuffetImg} alt="" />
          </div>
          <div className="header__truckImg">
            <img src={TruckImg} alt="" />
          </div>
        </div>
        <div className="header__moving-animation--wrapper"></div>
      </div>
    </header>
  );
}

export default Header;
