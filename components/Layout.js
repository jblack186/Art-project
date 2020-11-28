import Link from 'next/link';
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { Component, useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { motion, useViewportScroll } from "framer-motion"


export default function Layout ({children, title})  {

return (
  <div>

    <Head>
      <title>BlueAllureInk</title>
    </Head>
    <header>
        <div className='head-container'>
          <div className='site-name'>
          <img className='logo' src="../static/bunny.png" alt="logo" />
          </div>
            <nav className='nav-one'>
              <div className='nav-container'>
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/about">
                  <a>About</a>
                </Link>
                <Link href="/hireme">
                  <a>Hire Me</a>
                </Link>
                <Link href="/blog">
                  <FontAwesomeIcon style={{color: 'lightgray', fontSize: '30px'}} className='bag' icon={faShoppingBag} />
              </Link>
              </div>
            </nav>
          </div>
      </header>
     {/* <h1>{title}</h1> */}
      {children}
    {/* <footer>
    <section className='footer-container'>
      <div className='footer-left'>
          <Link href="/">
              <a>Home</a>
          </Link>
          <Link href="/about">
              <a>About</a>
          </Link>
          <Link href="/hireme">
            <a>Hire Me</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
      </div>
      <div className='footer-right'>
          <img className='footer-logo' src="../static/logo.png" alt="logo" />
<p>@ Copyright - 2020</p>
      </div>

              </section>

    </footer> */}
    <style jsx>{`
  
  header {
    width: 100%;
    height: 100px;
    background-color: white;
    position: relative;

  }

  .head-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding-top: 15px;
  }

  .nav-one {
    display: flex;
    justify-content: flex-end;
    width: 30%;
    position: fixed;
    right: 100px;
    top: 45px;
    z-index: 99999999;

  }



  .nav-container {
    align-items: center;
    width: 60%;
    display: flex;
    justify-content: space-between;

  }

  .logo {

    width: 50px;
    heigth: 50px;
    position: fixed;
    z-index: 99999999;

  }


  nav a {
    color: white;
    text-decoration: none;
  }

  .bag {
    color: white;
  }

  footer {
    background: #0d42a2;
    color: #d1d1d1;
    font-size: 1rem;
    font-weight: 200;

  }

  .footer-container {
    height: 200px;
    background: #0d42a2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }

  .footer-left {
    display: flex;
    width: 300px;
    justify-content: space-around;

  }

  .footer-right {
    display: flex;
    flex-direction: column;

  }

  .footer-right img {
    width: 200px;
    object-fit: contain;
  }


  .footer-container a {
    text-decoration: none;
    font-weight: 200;
    color: #d1d1d1;
  }



`}</style>
    <style global jsx>{`
      body {
        font-family: 'Libre Baskerville', serif;
        margin: 0;
        font-size: 110%;
      }

      p {
        font-weight: 800;
      }
    `}</style>

  </div>
)
    }


