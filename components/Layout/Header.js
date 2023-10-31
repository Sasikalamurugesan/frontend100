/*import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './header.css';
import { motion } from 'framer-motion';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import Profile from "../../pages/Profile";

const Header = () => {
    const headerRef = useRef(null);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("sticky_header");
            } else {
                headerRef.current.classList.remove("sticky_header");
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();
        return () => window.removeEventListener("scroll", stickyHeaderFunc);
    });

    const menuToggle = () => menuRef.current.classList.toggle('active_menu');
    const navigateToCart = () => {
        navigate("/cart");
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
                                    <a href="/">Home</a>
                                </li>
                                <li className="nav_item">
                                    <a href="/shop">Shop</a>
                                </li>
                                <li className="nav_item">
                                    <a href="/cart" onClick={navigateToCart}>Cart</a>
                                </li>
                                <li className="nav_item">
                                    <a href="/blog">Blog</a>
                                </li>
                                <li className="nav_item">
                                    <a href="/profile">Profile</a>
                                </li>
                                <li className="nav_item">
                                <a href="/login">Profile</a>
                                  </li>
                            </ul>
                        </div>
                        <div className="nav_icons">
                            <span className="fav_icon"><i className="ri-heart-2-line"></i><span className="badge">2</span></span>
                            <span className="cart_icon" onClick={navigateToCart}>
                                <i className="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>
                            <a href="/login" className="user_icon">
                                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
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

export default Header;*/
