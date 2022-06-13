import React from 'react'
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Search = () => {
  return (
    <div>
        <div className="searchInputs">
            <input type="text" placeholder="Search for a Product..."/>
            <div className='searchIcon'>
                <SearchIcon />
                
            </div>
            <div className='searchIcon cart'>
                {/*<ShoppingBagIcon  /> */}
                
                <FontAwesomeIcon icon="fa-solid fa-cart-plus" onClick={<Cart />} />
                
            </div>
        </div>
       
        <div className='dataResult'>
            
        </div>
    </div>
  )
}

export default Search