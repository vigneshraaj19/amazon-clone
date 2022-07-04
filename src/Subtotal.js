import React from 'react'

import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";


function Subtotal() {
    const [{ basket },dispatch] = useStateValue();
  return (
      <div className="subtotal">
        {/* currency format */}
         {/* currency format */}
          {/* currency format */}
   <CurrencyFormat
   renderText={(value) => (
       <>
       <p>
           Subtotal ({basket.length} items): <strong>{value}</strong>
       </p>
       <small className="subtotal__gift">
           <input type="checkbox" />This order contains a gift
       </small>
       </>
   )}
   decimalScale={2}//value in decimal value with 2 degit
   value={getBasketTotal(basket)}//current toal value of the products
   displayType={"text"}
   thousandSeparator={true}//specify the thoustands and hundreds eg 2,343$
   prefix={"$"}   />
   <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal