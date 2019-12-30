import React from 'react';

const Header = () =>{
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
         <i className="far fa-user"></i>
         </div>
       </div>
       </header>
   )
}

export default Header;