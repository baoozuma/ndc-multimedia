import images from "./importImages";
import React, { Component } from "react";
import {animateScroll as scroll } from 'react-scroll';
import {Routes, Route, Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div className='dynamic_nav'>
            <Link to= "/"><img className="logo" src={images['logo1.png']} /></Link>
            
            <nav className="navbar">
              <Link to="/" className="nav-item">TRANG CHỦ</Link>
              <Link to= "/ndc-multimedia/apply" className="nav-item">TUYỂN DỤNG</Link>
              <Link to="/ndc-multimedia/post" className="nav-item">BÀI VIẾT</Link>
              <Link to="/ndc-multimedia/login"className="nav-item">ĐĂNG NHẬP</Link>
            </nav>
            </div>
        )
    }
}
export default Navbar;