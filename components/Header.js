import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';



const Header = (props) =>{
  
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showMenu = () => setMenu(!menu)

   return (
       <div className="nav-header">
       <div className="app-header">
         <div className="nav-left">
             <a href="/">
                 <img src="https://premiumcoffee.ge/images/Juliuslogo.png"/>
             </a>
             <nav>
                 <ul>
                     <li>ყავა</li>
                     <li>ჩაი</li>
                     <li>აპარატები</li>
                     <li>აქსესუარები</li>
                 </ul>
             </nav>
        {!menu ? 
          <button type="button" onClick = {showMenu}>
          <i className="fas fa-bars"></i>
          </button> : 
          <button type="button" onClick = {showMenu}>
          <i className="fas fa-times"></i>
          </button>
        }   
         </div>
         <div className="nav-right">
         <i className="far fa-heart"></i>
         <i className="fas fa-shopping-cart"></i>
         <i className="far fa-user" onClick={handleShow}></i>
         </div>
         {menu && 
        <nav className="menu-nav">
               <ul>
                     <li>ყავა</li>
                     <li>ჩაი</li>
                     <li>აპარატები</li>
                     <li>აქსესუარები</li>
                </ul> 
        </nav>
        }   
         <RegistrationForm show={show} handleClose={handleClose} handleShow={handleShow} props={props}/>
       </div>
       </div>
   )
}

export default Header;