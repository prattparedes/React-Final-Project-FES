import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderImg from '../assets/HomeImg.svg'

function Header() {
  return (
    <header>
            <div className="header__content">
                <div className="header__content--text">
                    <h1 className="header__title">Best Recipe Search Engine in Perú!</h1>
                    <h3 className="header__sub-title">FIND THE RECIPE YOU NEED TO PREPARE <br />THE BEST MEAL IN  <span className="orange">MIAURI'S FOOD</span></h3>
                    <div className="input__wrapper">
                        <input type="text" placeholder="Search Recipes by Name" className="header__input" />
                        <button type="submit" className="header__btn btn__hover-effect click">
                            <SearchIcon className='input__icon'/>
                        </button>
                    </div>
                </div>
                <div className="header__img--wrapper">
                    <img src={HeaderImg} alt="" className="header__img" />
                </div>
                <div className="header__moving-animation--wrapper">
                </div>
            </div>
        </header>
  )
}

export default Header