import Layout from '../../components/Layout';
import Link from 'next/link';
import { withRouter, useRouter } from "next/router";
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import inventory from '../../inventory.js';
import { useEffect, useState } from "react";


const FirstItem = ({url}) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const router = useRouter();
console.log(router.query.id)

const findById = inventory.filter(item => {
    console.log(item.id)
    return item.id === Number(router.query.id)
  })


useEffect(() => {
  setName(findById.name);
  setPrice(findById.price)
}, router)



console.log(name)
  return(
 <Layout title='url.query.title'>
   { inventory.map(item => {
      console.log(item.id)
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
  <form action="/action_page.php">
  <label className='quantity' for="quantity">Quantity</label>
  <input type="number" id="quantity" name="quantity" min="1" max="100" />
  <button className='cart'>Add to Cart</button>
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
