import Layout from '../components/Layout';
import Link from 'next/link';
import { withRouter } from "next/router";

const FirstItem = ({url}) => {

  return(
  <Layout title='url.query.title'>
    <section className='item-page-container'>
      <div className='item-img'>
      <img className="collection-img" alt='first-item' src="../static/collection1.jpg" />
      </div>
      <div className='item-description'>
        <h3>Item Name</h3>
        <p>$450.00</p>
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

export default withRouter(FirstItem);
