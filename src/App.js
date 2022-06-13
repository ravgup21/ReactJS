import React, { useEffect, useState } from "react";
import Product from './components/Product'; 
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)

const product_API = "https://makeup-api.herokuapp.com/api/v1/products.json";

function App() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch(product_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <>
    <div className="header">
    <Header />
   
    </div>
    
     <div className="product-container"> 
      
      
       {products.length > 0 && products.map((product) => <Product key={product.id}
        {...product} />)}
      
      
   
    </div>
    </>
  );
  
}

export default App;
