import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState, useContext, createContext } from "react";
import { Router, useRouter } from 'next/router';
import inventory from '../inventory.js';



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Checkout({product}) {
  const [currCart, setCurrCart] = useState([]);
  const [exactCart, setExactCart] = useState([]);
  const [empty, setEmpty] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [total, setTotal] = useState([]);
  const [quantityHolder, setQuantityHolder] = useState(new Map);
  const [poke, setPoke] = useState(1);
  const [holder, setHolder] = useState([]);
  const router = useRouter();

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
          holder.push([currItems[i].name, currItems[i].quantity])
        }
      }
      setQuantityHolder(map)

    
  } else {
    setEmpty("Nothing in Cart")
  }

    }, [])

    // const getQuanity = (e) => {
    //   console.log(quantityHolder)

    //   if (quantityHolder.size > 0) {
    //   for(let i = 0; i < )
    //   console.log(quantityHolder.get(""))
    //   }
      
    // }
    


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

  async function add(e) {
    // setQuantity(quantity + 1)
    let findItem = await currCart.find(item => item.name === e.target.name)
    let itemIndex = await currCart.indexOf(findItem);
    
let findHolder = holder.find(item => item[0] === e.target.name)
findHolder[1] = findHolder[1] + 1
console.log(findHolder[1])
console.log(holder[itemIndex][1])
setHolder(...holder, holder[itemIndex][1] + 1)
  //   e.target.value + 1
  // let currQuant = await quantityHolder.get(e.target.id) 
  // quantityHolder.set(currQuant, (Number(e.target.value) + 1))

  }
// useEffect(() => {
//   setHolder(holder)
// }, [holder])

const test = e => {
  setPoke(poke + 1)
}

const increase = (data, id) => {
  const newData = [...data]
  newData.forEach(item => {
    if(item.id === id) item.quantity += 1
  })
  setCurrCart(newData)
  console.log(currCart)

}

  return (
  <div>
          {currCart ? currCart.map((prod, index) => {  
            index=prod.id           
       return <div>
                  <h3>{prod.name}</h3>
                  <p>{prod.price}</p>                  
                  {/* <label className='quantity' htmlFor="quantity">Quantity</label> */}
          <p>Quantity {prod.quantity}</p>
         <button className="btn btn-outline-secondary">
           -
         </button>
         <button onClick={() => increase(currCart, prod.id)} className="btn btn-outline-secondary">
           +
         </button>

               </div>
              
              
      }) : null }
<p>{total}</p>
    <h1>Checkout</h1>
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
    
    <p onClick={test}>{poke}</p>
      </div>
      
  )

}

// Checkout.getInitialProps = async () => {
//   const res = Inve
//   return {
//     proucts: 
//   }
// }


Checkout.getInitialProps = async () => {
  const product = inventory

console.log(product)
  return {
    product: product
  }
}
