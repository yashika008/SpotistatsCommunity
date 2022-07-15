import React, { Component } from 'react';
import { Button } from '../Button';
import SearchBar from '../SearchBar';
import{ MenuItems } from "./MenuItems";

import './Navbar.css'

class Navbar extends Component{
      state = { clicked: false}

handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
}

    render(){
        return(
          <nav className='NavbarItems'>
    <h1 className='navbar-logo'>Spotistats Community  <i className='fab fa-spotify'></i></h1>
   
    <div className='menu-icon' onClick={this.handleClick}>
        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'
    }></i>
    </div>

    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> 
        {MenuItems.map((item, index) =>{
return (
            <li key={index}>
                <a className={item.cName} href={item.url}>
                   {item.title}
                </a>
          </li>
)
        })} 
      
    </ul>
    
         
        
    <Button><a className='aa' href="https://www.spotify.com/in-en/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F"> Sign up</a></Button>
             </nav>
            
        )
    }
}


export default Navbar