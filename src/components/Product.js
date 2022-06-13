import React from "react";
import BUTTON from "./BUTTON.js";
import { Card } from "react-bootstrap";


const Product = ({name, description, brand, price, price_sign, product_link, image_link}) => 

  
    <div className="product">
      <Card>
        <Card.Img variant="top" src={image_link} alt={name} />
        <Card.Body>
            <Card.Title>
                
                <h3>{name}</h3>
                <br></br>
            </Card.Title>
            <Card.Subtitle>
              <h3>{brand}</h3>
              <br></br>
              </Card.Subtitle>
              <Card.Subtitle>
                    <h2>Price: {price} {price_sign}</h2>
              </Card.Subtitle>
              <br></br>
              <Card.Subtitle>
                    <span>Product Link: <a href={product_link}>{product_link}</a></span>
              </Card.Subtitle>

              <br></br>
              <BUTTON />
              {/*<Button variant="outline-primary" >+</Button>*/}
              {/*<Button variant="success" onClick={() => setCount((c) => c + 1)}>Add to Cart - {count}</Button> */}
              {/*<Button variant="outline-danger">-</Button>*/}
              

              
            
          </Card.Body>
        </Card>
        

    </div>
   
  

export default Product;