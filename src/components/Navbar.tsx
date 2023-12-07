import { useState } from 'react';
import { Burger } from './Burger';
import { Searchbar } from './Searchbar';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleBurger = () => setIsOpen(!isOpen);

  return (
    <div className="Navbar">
      <Burger
        isOpen={isOpen}
        onClick={toggleBurger}
      />
      <ul className="Navbar-list">
        <li className="Navbar-listItem">Contact us</li>
        <li className="Navbar-listItem">About</li>
        <li className="Navbar-listItem">
          <a href="/">Home</a>
        </li>
      </ul>
      <Searchbar />
    </div>
  );
};
