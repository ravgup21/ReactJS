import React from 'react';
import { Link } from "react-router-dom";
import { 
    Navbar,
    Container,
    FormControl,
    } from "react-bootstrap" ;
import Search from './Search';


const Header = () => {
  return (
    
    <Navbar bg="dark" variant="light" style={{ height: 100}}>
        <Container>
            <Navbar.Brand href="https://colourpop.com">
              
                <h1>ColourPop</h1>
                
            </Navbar.Brand>
            <Search />
            
            {/*<Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              
  /> 
          </Navbar.Text>*/}
        </Container>

    </Navbar>
  )
}

export default Header