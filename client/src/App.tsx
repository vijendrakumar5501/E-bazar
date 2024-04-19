import React from "react";
import { useState } from "react";
import { product } from "./data";
import "./App.css"


function App() {

  const [count, setCount] = useState(0);
  return (
    <div>
      <header>
        <main>
          <ul>
            {product.map((product, i) => (
              <li key={product.slug}>
                <img className='product-image' src={product.image} alt="images" />
                <h2 key={i}>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </li>
            ))}
          </ul>
        </main>
      </header>
      <footer>All right reserved</footer>

    </div>

  )
}

export default App

