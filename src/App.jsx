// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Link } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <header>
        <Link to="/">
          <h3>StockY</h3>
        </Link>
        <input type="search" name="search-bar" id="search-bar" placeholder='Enter name...' />
        <button>Search</button>
        <Link to="shop">Shop</Link>
        <button>Cart placeholder</button>
      </header>
      <main>
        <div id="banner">
          <h1>Hello, World!</h1>

        </div>
        <div id="top-picks"></div>
      </main>
      <footer>

      </footer>
    </>
  )
};

export default App
