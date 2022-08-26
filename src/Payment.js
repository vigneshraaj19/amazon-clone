import { Link  } from "@mui/material";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import {useStateValue} from "./StateProvider";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";
import axios from './axios';
import { toast } from 'react-toastify';

function Payment() {
    let history = useNavigate();
    const[{ basket,user},dispatch] = useStateValue();
    var userid=user?.uid;
    const stripe =useStripe();
    const elements=useElements();
    
    const [error,setError]=useState(null);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [disabled,setDisabled]=useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS',clientSecret);
    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        if(userid)
        {
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent  }) =>{
           
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            console.log(userid);
            console.log(basket);
            console.log(paymentIntent.id);
            dispatch({
                type:"EMPTY_BASKET"
            })
              history("../orders", { replace: true });
              toast.success("Payment Successful");
        })
    }
    else{
    console.log(userid);
    toast.error("Please Login for Payments")
    }
    }
    
  const handleChange = event =>{
       //listen for changes in the cardelement
       //and display any errors as a customer types there card details
       setDisabled(event.empty);
       setError(event.error ? event.error.message : "");
  }

    return(
    <div className="payment">
        <div className="payment_container">
            <h1>
                Checkout{<Link to="/checkout "style={{ textDecoration: 'none'}}>({basket?.length} items)</Link>}
            </h1>
            <div className="payment_section">
                <div className="payment_title">
         <h3>Delivery 
            Address</h3>
                </div>
            <div className="payment_address">
                <p>{user?.email}</p>
                <p>No:24, 3rd cross street</p>
                <p>Anna Nagar,Pattabiram</p>
                <p>Chennai-600072</p>
            </div>
            </div>
            <div className="payment_section">
            <div className="payment_title">
               <h3>Review items and delivery</h3>
            </div>
            <div className="payment_items">
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} />
                ))}
            </div>
            </div>
            <div className="payment_section">
             <div className="payment_title">
                <h3>Payment Method</h3>
             </div>
             <div className="payment_details">
                {/* stripe will go */}
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className="payment_priceContainer">
                         <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>

             </div>
            </div>
        </div>
    </div>
    );
}
export default Payment;