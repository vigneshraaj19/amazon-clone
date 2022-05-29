import React from 'react';
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
        <div className="home__container">

            {/* <img className="home__image" 
             src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg" alt="" /> */}
              {/* <img className="home__image" 
             src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/May/Unrec/Kotak/Skincare-desktop-Hero._CB637398142_.jpg" alt="" /> */}
             <img className="home__image" 
             src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/unrec/D39822856_WLA_BAU_GW-Unrec-heroes_DesktopTallHero_3000x1200_p._CB623159886_.jpg" alt="" />
             {/* <img className="home__image" 
             src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Heropanti2/3000x1200_Hero-Tall_NP._CB637454814_.jpg" alt="" />  */}
                 
                   
                
    <div className="home__row">
          <Product
           
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
           
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
           
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        </div>
    </div>
  )
}

export default Home;