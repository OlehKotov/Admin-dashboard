import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from './../../assets/images/logo.png'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import css from "./Logo.module.css";

const Logo = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogoClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard'); 
    } else {
      navigate('/login'); 
    }
  };

  return (
    <div onClick={handleLogoClick} style={{ cursor: 'pointer' }} className={css.logo}>
      <img src={logo} alt="App Logo" />
    </div>
  );
};

export default Logo;