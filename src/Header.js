//This file contains the search bar , logo and etc related to top bar
import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";

function Header() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
      <img className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img> 
      </Link>
        
    
    <div className="header__search">
        <input
        className="header__searchInput" type="text"></input> 
        <SearchIcon className="header__searchIcon"/>
        </div>
        <div className='header__nav'>
            {/* signin option */}
            <Link to="/login">
            <div className="header__option">
             <span className="header__optionLineone">Hello Guest</span>
             <span className="header__optionLinetwo">Sign in</span>
            </div>
            </Link>
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

           <Link to="/checkout">
           <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span  className='header__optionLineTwo header__basketCount'>{basket?.length}</span>     
            </div>
           </Link>
           
        </div>
    </div>
  )
}

export default Header