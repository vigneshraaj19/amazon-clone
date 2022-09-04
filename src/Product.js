import React from 'react'
import './Product.css';
import {useStateValue} from "./StateProvider";

function Product({detail}) {
  const [{basket},dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
       dispatch({
         type:"ADD_TO_BASKET",
         item:{
               id:detail._id,
               title:detail.title,
               image:detail.image,
               price:detail.price,
               rating:detail.rating,

         },
       });
  };
  
  return (
    <div className="product">
    <div className="product__info">
      <p>{detail.title}</p>
      <p className="product__price">
        <small>₹</small>
        <strong>{detail.price}</strong>
      </p>
      <div className="product__rating">
        {Array(detail.rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
    </div>

    <img src={detail.image} alt="" />
    <button onClick={addToBasket}>Add to basket</button>

  </div>
  )
}

export default Product