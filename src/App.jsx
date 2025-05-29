// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Link, Outlet } from "react-router-dom";
import './App.css'
// import { useEffect } from "react";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products", { mode: "cors" })
  //     .then((response) => response.json())
  //     .then((response) => setData(response))
  //     .catch((error) => console.error(error));
  // }, []);

  // console.table(data);
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
        <button>Cart</button>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <div>
          <h3>some footer info</h3>
        </div>
      </footer>
    </>
  )
};

export default App
