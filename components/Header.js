import React from 'react';

const Header = () =>{
   return (
       <div className="app-header">
         <div className="nav-left">
             <a href="/">
                 <img src="https://premiumcoffee.ge/images/Juliuslogo.png"/>
             </a>
             <nav>
                 <ul>
                     <li>Tea</li>
                     <li>Coffee</li>
                     <li>Equipment</li>
                     <li>Accessories</li>
                 </ul>
             </nav>
         </div>
         <div className="nav-right"></div>
       </div>
   )
}

export default Header;