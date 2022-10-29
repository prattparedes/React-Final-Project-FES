import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from '../assets/Logo.png'

function Navbar() {
  let navigate = useNavigate();

  return (
    <div>
      <nav>
        <div className="nav__container">
          <figure className="nav__logo--wrapper">
            <img src={Logo} alt="" className="nav__logo" />
          </figure>
          <ul className="nav__links">
            <button
              className="
                    nav__link 
                    link__hover-effect
                    link__hover-effect--blue
                    "
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              className="
                    nav__link 
                    link__hover-effect
                    link__hover-effect--black
                    "
              onClick={() => navigate("/search")}
            >
              Find your Recipe
            </button>
            <button
              className="
                    nav__link 
                    nav__link--btn
                    "
              onClick={() => alert("Function not implemented")}
            >
              Contact
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
