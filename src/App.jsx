// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Link, Outlet } from "react-router-dom";
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
        <button>
          <Link to="shop">Shop</Link>
        </button>
        <button>Cart placeholder</button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>

      </footer>
    </>
  )
};

export default App
