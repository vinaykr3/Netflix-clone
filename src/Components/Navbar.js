import React, {useState, useEffect} from 'react';
import "./Navbar.css";

const Navbar = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      window.addEventListener('scroll', () => {
          if(window.scrollY > 70){
              setShow(true);
          }else{
              setShow(false)
          }
      })
      return() => {
          window.removeEventListener("scroll")
      }
    }, []);
    
  return <div className={`navbar ${show && "nav_black"}`}>
    {/* netflix image */}
    <img className='nav_logo' src="/Images/netflix-logo.png" alt="Netlix logo" />

    {/* avatar image */}
    <img className='avatar_logo' src="/Images/login-logo.png" alt="avatar" />
  </div>;
};

export default Navbar;
