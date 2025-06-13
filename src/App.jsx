import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import SearchBar from './components/SearchBar';
import cartIcon from "./assets/cart-large-2-svgrepo-com.svg";


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
          <h1>StockY</h1>
        </Link>
        <SearchBar />
        <Link to="shop"><button>Shop</button></Link>
        <Link to="cart"><button id="cart-button"><img src={cartIcon} id ="cart-icon" alt="cart-icon" /> { cart.length ? <div id="cart-badge">{ cart.length }</div> : null }</button></Link>
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
