import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const Header = () =>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   return (
       <header>
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
         </div>
         <div className="nav-right">
         <i className="far fa-heart"></i>
         <i className="fas fa-shopping-cart"></i>
         <i className="far fa-user" onClick={handleShow}></i>
         </div>
         <RegistrationForm show={show} handleClose={handleClose} handleShow={handleShow}/>
       </div>
       </header>
   )
}

export default Header;