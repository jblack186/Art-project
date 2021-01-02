import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
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
  const [total, setTotal] = useState();
  const [quantityHolder, setQuantityHolder] = useState(new Map);
  const [poke, setPoke] = useState(1);
  const [holder, setHolder] = useState([]);
  const [sendCart, setSendCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setIsInCart(false)

    if (window.localStorage.getItem("items")) {
      let currItems = localStorage.getItem("items")
      currItems = JSON.parse(currItems)
      setCurrCart(currItems)
      let curr = localStorage.getItem("items")
      curr = JSON.parse(curr)
      curr.map(item => {
        sendCart.push({quantity: item.quantity, price: item.price})
      })
  
    
  } else {
    setEmpty("Nothing in Cart")
  }

    }, [])

    console.log("send",currCart)

    const test = (e) => {
      e.preventDefault()
      let arr = []
      let sendItems = currCart.map(item => {
        arr.push({quantity: item.quantity, price: item.price})
      })
      console.log(arr);
    }

  const handleClick = async (event) => {
    let items = localStorage.getItem("items")
    const arr = []
    let sendItems = await currCart.map(item => {
      arr.push({quantity: item.quantity, price: item.price})
    })
console.log('arr',arr)
console.log('send',sendCart)
    // Get Stripe.js instance
    // Call your backend to create the Checkout Session
    const {sessionId} = await fetch('/api/checkout/session', { 
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: await JSON.stringify({arr})
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
    let findItem = await currCart.find(item => item.name === e.target.name)
    let itemIndex = await currCart.indexOf(findItem);
    
    let findHolder = holder.find(item => item[0] === e.target.name)
    findHolder[1] = findHolder[1] + 1
    console.log(findHolder[1])
    console.log(holder[itemIndex][1])
    setHolder(...holder, holder[itemIndex][1] + 1)

  }


const increase = (data, id) => {
  const newData = [...data]
  newData.forEach(item => {
    if(item.id === id) item.quantity += 1

  })
  
  setCurrCart(newData)
}

const decrease = (data, id) => {
  const newData = [...data]
  newData.forEach(item => {
    if(item.id === id && item.quantity >= 2) item.quantity -= 1
  })
  setCurrCart(newData)
  

}

const remove = (data, id) => {
  setSendCart([])
  const newData = [...data]
  let dataLength = newData.length;
  if (data.length > 1) {
  let newId = (id - 1)
  console.log(id)
  newData.splice(id, 1)
  console.log(newData)
  setCurrCart(newData)
  localStorage.setItem('items', JSON.stringify(newData))
  newData.forEach(item => {
    sendCart.push(...sendCart, {quantity: item.quantity, price: item.price})
  })

 } else {

   newData.pop();
   setCurrCart(newData);
   localStorage.setItem('items', JSON.stringify(newData))
   newData.forEach(item => {
     sendCart.push(...sendCart, {quantity: item.quantity, price: item.price})
   })
 
 }
}

 function totaling() {
  
  let addUp = currCart.reduce(function (acc, item) {
    acc += item.priceView * item.quantity
  }, 0);
  setTotal(addUp)
  console.log(addUp)
}



useEffect(() => {
  totaling()
}, [])

  return (
  <div>
      
          {currCart.length > 0 ? currCart.map((prod, i) => {  
                       
       return <div  key={i}>
        
                  <h3>{prod.name}</h3>
                  <p>{prod.priceView}</p>                  
          <p>Quantity {prod.quantity}</p>
         <button onClick={() => decrease(currCart, prod.id)} className="btn btn-outline-secondary">
           -
         </button>
         <button onClick={() => increase(currCart, prod.id)} className="btn btn-outline-secondary">
           +
         </button>
         {console.log(typeof(prod.priceView), typeof(prod.quanitity))}

         <p>{prod.priceView * prod.quantity}</p>
         <button onClick={() => remove(currCart, i)} className="btn btn-outline-secondary">
           X
         </button>

               </div>
              
              
      }) : <p>Nothing in Cart</p> }
    <h1  onClick={test}>Checkout</h1>
    <h4> Total ${currCart.reduce((acc, item) => {
       ( acc += item.quantity * Number(item.priceView))
      return acc
    }, 0)}</h4>

    <button role="link" onClick={handleClick}>
      Checkout
    </button>
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
