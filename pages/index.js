import Link from 'next/link';
import Layout from '../components/Layout';
import { Component, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faArrowDown } from '@fortawesome/free-solid-svg-icons';
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
        background: light;
      }

      .top-mid-container h1 {
        margin: 0;
      }

    `}</style>


  </Layout>

    )}
    

