import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  const [{basket, user},dispatch] = useStateValue();
  
  return (
    <div className='checkout'>
     <div className="checkout__left">
       {/* <img
       className='checkout__ad'
       src="data:image/jpeg;base64,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"
       alt=""/> */}
       <div>
        <h3>Hello {user?.email}</h3>
         <h2 className="checkout__title">Your shopping basket</h2>
         
         {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
            
          ))}
         

       </div>
     </div>

     {/* total part */}
     <div className="checkout__right">
     <Subtotal />
     </div>
        </div>
  )
}

export default Checkout