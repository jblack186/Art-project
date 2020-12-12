import Layout from '../../components/Layout';
import { withRouter, useRouter } from "next/router";
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import inventory from '../../inventory.js';
import { useEffect, useState, useContext } from "react";
import Link from 'next/link';


const FirstItem = ({url}) => {
  const [currCart, setCurrCart] = useState([]);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [currQuantity, setCurrQuantity] = useState([]);
  const [item, setItem] = useState();
  const [items, setItems] = useState();
  const [exactCart, setExactCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isInCart, setIsInCart] = useState(false);
  const [idHolder, setIdHolder] = useState();

  const router = useRouter();
  console.log('search', cartItems)
console.log('ogogo',name, price)
console.log(router)
console.log('holder',idHolder)


function getProds() {

  const hold = localStorage.setItem("idHolder", JSON.stringify(Number(router.query.id)) )
  
  let holder = window.localStorage.getItem("idHolder")
  holder = JSON.parse(holder)
  console.log('coolz',holder)
  setIdHolder(holder)
  
  inventory.map((prod, key) => {
    key=prod.id
    console.log('ID',prod.id, router.query.id)
    if (Number(router.query.id === idHolder ||  Number(router.query.id) === prod.id )) {
      setItem(prod)
      setName(prod.name)
      setPrice(prod.price)
      
    }

  })

      let storage = window.localStorage.getItem("item-info")
      storage = JSON.parse(storage)
      console.log('boom',storage)
  
  
    

  }


useEffect(() => {
  getProds()
  
  if (window.localStorage.getItem("items")) {
    let currItems = window.localStorage.getItem("items")
    currItems = JSON.parse(currItems)
    console.log('boom',currItems)
    setCurrCart(currItems)
    setCartItems(currItems)
    
    localStorage.setItem("currItem", JSON.stringify([{name, price}]) )
    console.log('option1')
  
  }




  }, [])

  useEffect(() => {
    currCart.map(prod => {
      if (prod.name === name) {
        setIsInCart(true)

      
          } else {
        setIsInCart(false)
      }
  
    })

  
  }, [currCart])

  console.log('items', currCart)

const add = (e) => {
  setQuantity(quantity + 1)

}

const addToCart = (e) => {
  if (!isInCart && currCart.length > 0) {

  localStorage.setItem("items", JSON.stringify([...currCart, {name, price}]) )
  console.log('option1')

} else if(!isInCart && currCart.length === 0) {
    localStorage.setItem("items", JSON.stringify([{name, price}]) )
  console.log('option2')
  }
  

} 

console.log('name', name, price)

console.log('isit', isInCart)
// var holder = {};
// currCart.forEach(function(d) {
//   if (holder.hasOwnProperty(d.name)) {
//     holder[d.name] = holder[d.name] + d.quantity;
//   } else {
//     holder[d.name] = d.quantity
//   }
// })

// var obj2 = [];
// for (var prop in holder) {
//   obj2.push({name: prop, quantity: holder[prop]})
// }
// localStorage.setItem("itemsQuantity", JSON.stringify(obj2) )

// exactCart.push(obj2)
// console.log('obj2',obj2)



return(
 <Layout title='url.query.title'>
   { inventory.map((item, key) => {
      console.log(item.id)
      key=item.id
      if (item.id === Number(router.query.id)) { return <section className='item-page-container'>
      <div className='item-img'>
      <img className="collection-img" alt='first-item' src="../static/collection1.jpg" />
      </div>
      <div className='item-description'>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <ul>
          <li>Original Artwork</li>
          <li>Arrives with Certificate of Authencity</li>
          <li>Original Artwork</li>
          <li>Arrives with Certificate of Authencity</li>

        </ul>
  <form action="/checkout">
  <Link href="/checkout"><button onClick={addToCart} className='cart'>Add to Cart</button></Link>
</form>        
      </div>

    </section>
    
   }})

    } 
    
    <style jsx>{`
        .item-page-container {
          min-height: 70vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 80%;
          margin: 0 auto;
          font-size: 1.5rem;
        }

        @media screen and (max-width: 1024px) {
          .item-page-container {
              display: flex;
              flex-direction: column;
              margin-top: 35px;
              margin-bottom: 35px;
            
          }
        }
  

        .item-img {
          width: 50%;
        }

        @media screen and (max-width: 1024px) {
          .item-img {
              width: 100%;
              
            
          }
        }


        .collection-img {
          width: 100%;
        }

        .item-description {
          width: 42%;
        }

        @media screen and (max-width: 1024px) {
          .item-description {
              margin-top: 30px;
              width: 100%;
              
            
          }
        }


        .item-description h3{
          color:  black;
          font-size: 2rem;
          font-weight: 800;
        }


        .item-description p{
          color:  #33ccff;
        }

        form {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

        }

        .quantity {
          font-weight: 800;
          font-size: 1.2rem;

        }


        #quantity {
          width: 10%;
          margin-bottom: 10px;
          font-size: 1rem;

        }

        .cart {
          background: #33ccff;
          border: none;
          color: white;
        }

    `}</style>

  </Layout>
  )


}
// how to fetch backend data with next js and use dynamic pages
// const {publicRuntimeConfig} = getConfig()
// console.log('hi',getConfig)
// export async function getServerSideProps(context) {
//   const {id} = context.query
//   const res = await fetch(`${publicRuntimeConfig.API_URL}/items/${id}`)  
//   const data = await res.json()
//   return {
//    props: {
//      inventory: data
//    },
//   }
// }

export default FirstItem;
