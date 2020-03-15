import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = props => {
  return (
    <header className='black mb5 pt5'>
      <h1 className='ttu f3 tracked-mega anton tc mt0 mb3'>Marmalade.fm</h1>
      <ul className='flex list justify-center pl0'>
        <li className='mh2'>
          <NavLink exact className='nav-link biryani-black f6 ttu gray no-underline' to='/'>
            What's hot
          </NavLink>
        </li>
        <li className='mh2'>
          <NavLink className='nav-link biryani-black f6 ttu gray no-underline' to='/archive'>
            Archive
          </NavLink>
        </li>
        <li className='mh2'>
          <NavLink className='nav-link biryani-black f6 ttu gray no-underline' to='/about'>
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
