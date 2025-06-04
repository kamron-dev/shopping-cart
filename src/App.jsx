import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
// import { useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart(oldItems => [...oldItems, item]);
    console.log(cart);
  };

  const handleCheckOut = () => {
    alert("Thank you for buying!");
    setCart([]);
  };
  
  return (
    <>
      <header>
        <Link to="/">
          <h2>StockY</h2>
        </Link>
        <input type="search" name="search-bar" id="search-bar" placeholder='Enter name...' />
        <button>Search</button>
        <Link to="shop"><button>Shop</button></Link>
        <Link to="cart"><button id="cart-button">Cart { cart.length ? <div id="cart-badge">{ cart.length }</div> : null }</button></Link>
      </header>
      <main>
        <Outlet context={{handleAddToCart, cart, handleCheckOut}}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
};

export default App
