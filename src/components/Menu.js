import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div>
        <ul className='menu'>
           <li>
           <Link to='/' className='header-link'>home</Link> 
             </li>
             <li>
            <Link to='users' className='header-link'>users</Link>
               </li>

               <li>
                 <Link to='contact' className='header-link'>contact</Link>
                 </li>
 
          </ul>
      </div>
  )
}

export default Menu;