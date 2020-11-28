import Link from 'next/link';
import Layout from '../components/Layout';
import { Component, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faArrowDown, faBrush, faRuler, faMagic, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';


export default function Index({news}) {

  
    return (
  <Layout>
    <section className='top-section'>
      <img className='hero' src="../static/hero.jpg" alt="hero" />
      <div className='arrow'>
        <FontAwesomeIcon style={{color: 'white', fontSize: '70px'}} className='bag' icon={faArrowDown} />
      </div>
    </section>
    <section className='top-mid-container'>
      <div className='top-mid'>
        <h1>BlueAllureInk</h1>
        <p>I'm James Lewis, a multidisciplinary British artist. Best known for producing viral art videos, teaching art workshops, and working with the biggest global brands.</p>
        <a href='#'>Learn More</a>
      </div>
    </section>
    <section className='bottom-mid-section'>
      <ul>
        <li>
          <FontAwesomeIcon style={{color: 'white', fontSize: '2.3rem'}} className='bag' icon={faBrush} />
          <p>Character Painting</p>
        </li>
        <li>
          <FontAwesomeIcon style={{color: 'white', fontSize: '2.3rem'}} className='bag' icon={faRuler} />
          <p>Character Painting</p>
        </li>
        <li>
          <FontAwesomeIcon style={{color: 'white', fontSize: '2.3rem'}} className='bag' icon={faMagic} />
          <p>Character Painting</p>
        </li>
        <li>
          <FontAwesomeIcon style={{color: 'white', fontSize: '2.3rem'}} className='bag' icon={faPencilAlt} />
          <p>Character Painting</p>
        </li>

      </ul>
    </section>
    <style jsx>{`

      .top-section {
        position: relative;
        background: lightblue;

      }

      .hero {
        object-fit: cover;
        height: 90vh;
        width: 100vw;
        position: sticky;
        top: 100px;
      }

      .arrow {
        position: absolute;
        bottom: 7%;
        left: 50%;
        cursor: pointer;
      }

      .top-mid-container {
        height: 70vh;
        width: 100vw;
        background: #dea0c0;
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
        color: #0033cc;
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
        color: #0033cc;
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
        background: lightblue;
        height: 40vh;
        
      }

      @media screen and (max-width: 600px) {
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
       font-size: 1rem;
       width: 5rem;
      }

      .bottom-mid-section li p{
        letter-spacing: 1.2px;
        color: #0033cc;
      }




    `}</style>


  </Layout>

    )}
    

