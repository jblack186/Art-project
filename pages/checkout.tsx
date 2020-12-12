import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState, useContext, createContext } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const Checkout = () => {
  const [currCart, setCurrCart] = useState([]);
  const [exactCart, setExactCart] = useState([]);
  const [empty, setEmpty] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);


  useEffect(() => {
    setIsInCart(false)

    if (window.localStorage.getItem("items")) {
      let currItems = localStorage.getItem("items")
      currItems = JSON.parse(currItems)
      setCurrCart(currItems)

    
  } else {
    setEmpty("Nothing in Cart")
  }

    }, [])
    console.log('carts1',exactCart)
    console.log('carts2',currCart)


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
    setQuantity(quantity + 1)
  
  }
  

  return (
  <div>
          {currCart ? currCart.map(prod => {

        return <div>
                  <h3>{prod.name}</h3>
                  <p>{prod.price}</p>
                  <p>{prod.quantity}</p>
                  <label className='quantity' htmlFor="quantity">Quantity</label>
                  <input onClick={add} type="number" id="quantity" name="quantity" value={quantity} min="1" max="100" />

               </div>
              
              
      }) : null }

    <h1>Checkout</h1>
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
      </div>
      
  )

}

export default Checkout;
