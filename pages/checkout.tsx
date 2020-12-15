import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState, useContext, createContext } from "react";
import { Router } from 'next/router';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const Checkout = () => {
  const [currCart, setCurrCart] = useState([]);
  const [exactCart, setExactCart] = useState([]);
  const [empty, setEmpty] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [total, setTotal] = useState([]);
  const [quantityHolder, setQuantityHolder] = useState(new Map);

  useEffect(() => {
    setIsInCart(false)

    if (window.localStorage.getItem("items")) {
      let currItems = localStorage.getItem("items")
      currItems = JSON.parse(currItems)
      setCurrCart(currItems)
      let map = new Map();
      for (let i = 0; i < currItems.length; i++) {
        if (!map.has(currItems[i].name)) {
          map.set(currItems[i].name, currItems[i].quantity)
        }
      }
      setQuantityHolder(map)

    
  } else {
    setEmpty("Nothing in Cart")
  }

    }, [])
    console.log(quantityHolder.size)

    const getQuanity = () => {
      console.log(quantityHolder)

      if (quantityHolder.size > 0) {
      console.log(quantityHolder.get("Brushes"))
      }
      
    }
    

    useEffect(() => {
      getQuanity();
    }, [currCart])

  const handleClick = async (event) => {
    // Get Stripe.js instance
    // Call your backend to create the Checkout Session
    const {sessionId} = await fetch('/api/checkout/session', { 
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ quantity: 1 })
    }).then(res => res.json())

    const stripe = await stripePromise;
    const {error} = await stripe.redirectToCheckout({
      sessionId,
    })

    // When the customer clicks on the button, redirect them to Checkout.
    // const result = await stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });
  }

  const add = (e) => {
    // setQuantity(quantity + 1)
   e.target.value = e.target.value + 1
  }
  console.log(total)

  return (
  <div>
          {currCart ? currCart.map((prod, index) => {  
            index=prod.id           
       return <div>
                  <h3>{prod.name}</h3>
                  <p>{prod.price}</p>                  
                  <label className='quantity' htmlFor="quantity">Quantity</label>
                  <input onClick={add} type="number" id="quantity" name={prod.id} value={Number(prod.quantity)} placeholder="1" min="1" max="100" />
          <p>Item Totoal: {prod.price * prod.quantity}</p>
               </div>
              
              
      }) : null }
<p>{total}</p>
    <h1>Checkout</h1>
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
      </div>
      
  )

}

export default Checkout;
