import React, { useRef, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import './header.css';
import { motion } from 'framer-motion';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import Profile from "../../pages/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faSignOut, faUserCircle}from '@fortawesome/free-solid-svg-icons';

const Logheader = () => {
    const [user,setUser]=useState(null);
    const headerRef = useRef(null);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.
                
                
                
                List.add("sticky_header");
            } else {
                headerRef.current.classList.remove("sticky_header");
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();
        return () => window.removeEventListener("scroll", stickyHeaderFunc);
        

    });
    useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('https://sasi-be.onrender.com/getprofile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);
  
    

    const menuToggle = () => menuRef.current.classList.toggle('active_menu');
    const navigateToLhome = () => {
        navigate("/Lhome");
    }
    const navigateToLcart = () => {
        navigate("/Lcart");
    }
    const navigateToLshop = () => {
        navigate("/Lshop");
    }
    const navigateToLblog = () => {
        navigate("/Lblog");
    }

    const navigateToLogin = () => {
        navigate("/login");
    }
    const navigateToProfile = () => {
        navigate("/profile");
    }
    const navigateToHome = () => {
        navigate("/");
    }

    return (
        
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>Spicemart</h1>
                            </div>
                        </div>

                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">
                                <li className="nav_item">
                                    <a href="/Lhome" onClick={navigateToLhome}>Home</a>
                                </li>
                                <li className="nav_item">
                                    <a href="/Lshop"onClick={navigateToLshop}>Shop</a>
                                </li>
                                <li className="nav_item">
                                    <a href="/Lcart" onClick={navigateToLcart}>Cart</a>
                                </li>
                                <li className="nav_item">
                                    <a href="/Lblog" onClick={navigateToLblog}>Blog</a>
                                </li>
                                <li className="nav_item">
                                    <a href="/profile" onClick={navigateToProfile}>{user&&(<span >{user.username}</span>)}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav_icons">
                            <span className="fav_icon"><i className="ri-heart-2-line"></i><span className="badge">2</span></span>
                            <span className="cart_icon" onClick={navigateToLcart}>
                                <i className="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>
                            <a href="/" className="user_icon" onClick={navigateToHome} >
                                <FontAwesomeIcon icon = {faSignOut}  />
                            </a>
                            <div className="mobile_menu">
                                <span onClick={menuToggle}><i className="ri-menu-fill"></i></span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Logheader;
