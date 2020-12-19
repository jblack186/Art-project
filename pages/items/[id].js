import Layout from '../../components/Layout';
import { withRouter, useRouter } from "next/router";
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import inventory from '../../inventory.js';
import { useEffect, useState, useContext } from "react";
import Link from 'next/link';


export default function FirstItem({product}) {
  const [currCart, setCurrCart] = useState([]);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [currQuantity, setCurrQuantity] = useState([]);
  const [item, setItem] = useState();
  const [items, setItems] = useState();
  const [exactCart, setExactCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isInCart, setIsInCart] = useState(false);
  const [idHolder, setIdHolder] = useState();
  const [id, setId] = useState();

  const router = useRouter();

function getProds() {
  const hold = localStorage.setItem("idHolder", JSON.stringify(Number(router.query.id)) )

  let holder = window.localStorage.getItem("idHolder")
  holder = JSON.parse(holder)
  setIdHolder(holder)
  product.map((prod, key) => {

    key=prod.id
    if (Number(router.query.id) === idHolder ||  Number(router.query.id) === prod.id ) {
      setItem(prod)
      setName(prod.name)
      setPrice(prod.price)
      setQuantity(prod.quantity)
      setId(prod.id)
    } else {
    }

  })

      let storage = window.localStorage.getItem("item-info")
      storage = JSON.parse(storage)
  
  
    

  }


useEffect(() => {
  getProds()
  console.log('product',product)
  if (window.localStorage.getItem("items")) {
    let currItems = window.localStorage.getItem("items")
    currItems = JSON.parse(currItems)
    setCurrCart(currItems)
    setCartItems(currItems)
    
    localStorage.setItem("currItem", JSON.stringify([{name, price, id, quantity}]) )
  
  }



  }, [router])
  useEffect(() => {
    for (let i = 0; i < currCart.length; i++) {
  
      if ((currCart[i].name === name)) {
        setIsInCart(true)
          break
          } else {
        setIsInCart(false)
        

      }
  
    }

  
  }, [currCart])


const add = (e) => {
  setQuantity(quantity + 1)

}

const addToCart = (e) => {
  if (!isInCart && currCart.length > 0) {

  localStorage.setItem("items", JSON.stringify([...currCart, {name, price, id, quantity}]) )

} else if(!isInCart && currCart.length === 0) {
    localStorage.setItem("items", JSON.stringify([{name, price, quantity, id}]) )
  } else {
    null
  }
  

} 




return(
 <Layout title='url.query.title'>
   { inventory.map((item, key) => {
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

FirstItem.getInitialProps = async () => {
  const product = inventory

console.log(product)
  return {
    product: product
  }
}
