import React, {useState} from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import "./Navbar.css";
const Navbar = () => {
  const [active, setActive] = useState('navbar')
  const showNav = ()=>{
    setActive('navbar activeNavbar')
  }
  const reamoveNavbar = ()=>{
    setActive('navbar')
  }
  return (
    <section className="navbarsection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex" />
          <h1>
            <MdOutlineTravelExplore className="icon" />Travel.</h1>
        </div>
       
        <div className={active}>
          <ul className="Navlists flex">
            <li className="navitem">
              <a href="#" className="navlink">Home</a>
            </li>
            
            <li className="navitem">
              <a href="#" className="navlink">Packages</a>
            </li>
            
            <li className="navitem">
              <a href="#" className="navlink">Shop</a>
            </li>
            
            <li className="navitem">
              <a href="#" className="navlink">About</a>
            </li>
            
            <li className="navitem">
              <a href="#" className="navlink">Pages</a>
            </li>
            
            <li className="navitem">
              <a href="#" className="navlink">News</a>
            </li>
            
            <li className="navitem">
              <a href="#" className="navlink">Contact</a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
              </button>            
          </ul>
          <div onClick={reamoveNavbar} className="closeNavbar">
          <IoIosCloseCircle className="icon" />


          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
