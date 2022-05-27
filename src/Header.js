//This file contains the search bar , logo and etc related to top bar
import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
  return (
    <div className="header">
        <img className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
    <div className="header__search">
        <input
        className="header__searchInput" type="text"></input> 
        <SearchIcon className="header__searchIcon"/>
        </div>
        <div className='header__nav'>
            {/* signin option */}
            <div className="header__option">
             <span className="header__optionLineone">Hello Guest</span>
             <span className="header__optionLinetwo">Sign in</span>
            </div>
            {/* order option */}
            <div className="header__option">
            <span className="header__optionLineone">Returns</span>
             <span className="header__optionLinetwo">& orders</span>
            </div>
            {/* prime option */}
            <div className="header__option">
            <span className="header__optionLineone">Your</span>
             <span className="header__optionLinetwo">Prime</span>
            </div>

            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span  className='header__optionLineTwo header__basketCount'>0</span>
                
            </div>
        </div>
    </div>
  )
}

export default Header