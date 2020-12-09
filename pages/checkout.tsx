import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const Checkout = () => {
  const [currCart, setCurrCart] = useState([]);
  var prods = ''
  useEffect( () => {
    
    if (localStorage.getItem("items")) {
      let currItems = localStorage.getItem("items")
      currItems = JSON.parse(currItems)
      setCurrCart(currItems)
    
    prods = currItems
    
  }
    }, [])


  useEffect( () => {
  function getProd() {
    if (localStorage.getItem("items")) {
      var currItems =  localStorage.getItem("items")
      currItems = JSON.parse(currItems)
      setCurrCart(currItems)
    
    
    let display = currCart[0];
    const map = new Map();
      console.log('hey')
    if(currCart.length > 0) {
    for (let i = 1; i < currCart.length; i++) {
      console.log('hi')

      let currQuantity = ''
      if (map.has(currCart[i].name) === false) {
        console.log('yes')

        currQuantity = currCart[i].quantity
        map.set(currCart[i].name, currCart[i].quantity)
      } else {
        console.log('no')
        map.set(currCart[i].name, currQuantity + currCart[i].quantity)

        
      }
      
    }
    }
  
    console.log('map',map)
 
  } else {
    console.log('no')
  }
}
    },[])

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


  return (
  <div>
          {currCart ? currCart.map(prod => {
        return <div>
                  <h3>{prod.name}</h3>
                  <p>{prod.price}</p>
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
