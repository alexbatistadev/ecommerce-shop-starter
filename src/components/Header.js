import React, { useContext, useEffect, useState } from 'react';
//sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//cart context
import { CartContext } from '../contexts/CartContext';
//import link
import { Link } from 'react-router-dom';
//import logo
import Logo from '../img/logo.svg';
//import icons
import { BsBag } from 'react-icons/bs';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  //event Listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? 'bg-purple-100 py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className="container flex mx-auto items-center justify-between h-full">
        {/* logo */}
        <Link to={'/'}>
          <div>
            <img src={Logo} alt="logo cruzeta" className="w-[40px]" />
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-purple-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
