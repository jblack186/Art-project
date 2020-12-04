import Link from 'next/link';
import Layout from '../components/Layout';
import { Component, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faAngleDown, faBrush, faRuler, faMagic, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import { motion, useViewportScroll } from "framer-motion"
import { Link as Lin, animateScroll as scroll } from "react-scroll";
import inventory from '../inventory.js';

export default function Index({news}) {
  const [opacity, setOpacity] = useState(1);
  const [display, setDisplay] = useState(0);
  const [lastYPos, setLastYPos] = useState(0);
  const [popOut, setPopOut] = useState(false);

  const [shouldShowActions, setShouldShowActions] = useState(false);


  const setImageStyle = () => {
    setOpacity(opacity);

  }

const test = () => {
  console.log('yo')
}


const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/firstItem?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);





    return (
  <Layout>
    
    <div className='arrow'>
    <Lin 
        activeClass="active"
        to="toBiz"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        ><FontAwesomeIcon onClick={test}  className='arrow' icon={faAngleDown} /></Lin>
      </div>

    <section className='top-section'>
      <img className='hero' src="../static/hero.jpg" alt="hero" />
    </section>
    <section className='top-mid-container'>
      <div className='top-mid'>
        <h1  id="toBiz">BlueAllureInk</h1>
        <p>I'm James Lewis, a multidisciplinary British artist. Best known for producing viral art videos, teaching art workshops, and working with the biggest global brands.</p>
        <a href='#'>Learn More</a>
      </div>
    </section>
    <section className='bottom-mid-section'>
      <ul>
        <li>
          <FontAwesomeIcon style={{color: 'white', fontSize: '2rem'}} className='bag' icon={faBrush} />
          <p>Character Painting</p>
        </li>
        <li>
          <FontAwesomeIcon style={{color: 'white', fontSize: '2rem'}} className='bag' icon={faRuler} />
          <p>Character Painting</p>
        </li>
        <li>
          <FontAwesomeIcon style={{color: 'white', fontSize: '2rem'}} className='bag' icon={faMagic} />
          <p>Character Painting</p>
        </li>
        <li>
          <FontAwesomeIcon style={{color: 'white', fontSize: '2rem'}} className='bag' icon={faPencilAlt} />
          <p>Character Painting</p>
        </li>

      </ul>
    </section>
    {/* <section className='collection-section'>
      <div className='collection-header'>
        <h3>Collection</h3>
      </div>
      <div className='collection-container'>
        <div className='collection'>
          <img className='collection-img' src='../static/collection1.jpg' alt='collection1' />
          <div className='collection-text'>Trees</div>
          <div className='overlay'></div>
        </div>
        <div className='collection'>
          <img className='collection-img' src='../static/collection2.jpg' alt='collection2' />

        </div>
        <div className='collection-img' className='collection'>
          <img src='../static/collection3.jpg' alt='collection3' />

        </div>

      </div>
    </section> */}
    <section className='collection-container'>
    <div className='collection-header'>
        <h3>Collection</h3>
      </div>

      <div className='row-container'>
  <Row>
  {inventory.map(item => {
      return      <Link href="/items/[id]" as={`items/${item.id}`}><Col lg={4} > 
      <div>
        <div className="content">  
        <div className="content-overlay"></div>
       <img className="collection-img" src={`../static/${item.pic}`} />
        <div className="content-details fadeIn-top fadeIn-top">
          
          <p>Trees</p>
        </div>
    </div>
</div>    
</Col></Link>

    })}
  </Row>
</div>
</section>
<style jsx>{`


      .top-section {
        position: sticky;
        top: 0;
        z-index: -1;


      }

      .hero {
        object-fit: cover;
        height: 86vh;
        width: 100vw;
        z-index: -1;

      }
      

      @media screen and (max-width: 700px) {
        .hero {
          height: 68vh;
 
 
      }
    }

    @media screen and (max-width: 600px) {
      .hero {
        height: 35vh;


    }
  }

  .collection-container {
    padding-bottom: 100px;

  }



      .arrow {
        position: absolute;
        bottom: 5%;
        left: 50%;
        cursor: pointer;
        color: #FB8DE9;
        font-weight: 200;
        font-size: 70px;
      }

      @media screen and (max-width: 1024px) {
        .arrow {
         display: none;
    
        }
      }
    

      .top-mid-container {
        height: 70vh;
        width: 100vw;
        background: lightgray;
        display: flex;
        flex-direction: column;
        justify-content: center;

      }

      @media screen and (max-width: 600px) {
        .top-mid-container {
          height: 50vh;
          justify-content: space-around;

        }
        }


      .top-mid {
        width: 80%;
        height: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        line-height: 48px;
        color: black;

      }

      @media screen and (max-width: 1024px) {
        .top-mid {
         width: 85%;
         height: 100%;
         line-height: 1.8rem;
         font-size: 3rem;


        }
      }


      @media screen and (max-width: 700px) {
          .top-mid {
            width: 85%;
            height: 100%;
            line-height: 1.8rem;
            font-size: 2rem;
   
   
        }
      }





      .top-mid-container h1 {
        font-size: 3.5rem;
        margin: 0;

      }

      @media screen and (max-width: 1024px) {
        .top-mid-container h1 {
          font-size: 2.2rem;

        }
      }


      .top-mid p {
        font-size: 2.3rem;
        width: 60%;
      }

      @media screen and (max-width: 1024px) {
        .top-mid p {
         width: 95%;
         font-size: 2.7rem;
         line-height: 52px;

        }
      }

      @media screen and (max-width: 700px) {
        .top-mid p {
            width: 95%;
            font-size: 1.3rem;
            line-height: 35px;
            margin-bottom: 0;
          
        }
      }


      @media screen and (max-width: 992px) {
        .top-mid p {
         
        }
      }


      

      .top-mid-container a {
        color: #33ccff;
        font-size: 2rem;
        text-decoration: none;
        font-weight: 800;
        color: white;
      }

      @media screen and (max-width: 700px) {
        .top-mid-container a {
            font-size: 1.3rem;
            
          
        }
      }


      .bottom-mid-section {
        background: black;
        height: 40vh;

      }

      @media screen and (max-width: 900px) {
        .bottom-mid-section {
          display: none;
          
        }
  
        }


      .bottom-mid-section ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        margin: 0;
        padding: 0;

      }

      .bottom-mid-section li {
       list-style: none;
       width: 10rem;
      }

      .bottom-mid-section li p {
        letter-spacing: 1.2px;
        color: white;
        font-size: 1.9rem;

      }


      .collection-header {
        background: white;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 1.1px;
        color: #33ccff;
        font-size: 3rem;
        
      }

      .collection-header h3 { 
        margin: 0;
        font-size: 5rem;
        font-weight: 800;
      }

      .collection-container {
        background: white;
      }

      .collection-img {
        width: 100%;
        height: 40vh;
        cursor: pointer;
        
        
      }

      .row-container {
        width: 90%;
        margin: 0 auto;
      }


      .collection {
        position: relative;
        cursor: pointer;
      }
      

      .overlay-gone {
        display: none;
      }

      .collection-text {
        position: absolute;
        width: 200px;
        height: 50px;
        top: 50%;
        margin-top: -25px;

      }



body{
  background: #f9f9f9;
  font-size: 16px;
}

.main-title{
  color: #2d2d2d;
  text-align: center;
  text-transform: capitalize;
  padding: 0.7em 0;
}

.contain{
  float: left;
  width: 100vw;
  cursor: pointer;
}
@media screen and (max-width: 640px){
  .contain{
    display: block;
    width: 100%;
  }
}

@media screen and (min-width: 900px){
  .contain{
    width: 100%;
  }
}


.content {
  position: relative;
  width: 100%;
  
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay{
  opacity: 1;
}


.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}


.content-details p{
  color: #fff;
  font-size: 2em;
}

.fadeIn-bottom{
  top: 80%;
}

.fadeIn-top{
  top: 20%;
}

.fadeIn-left{
  left: 20%;
}

.fadeIn-right{
  left: 80%;
}




    `}</style>


  </Layout>

    )}
    

