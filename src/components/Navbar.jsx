import images from "./importImages";
import React, { Component } from "react";
class Navbar extends Component {
    render() {
        return (
            <>
            <img className="logo" src={images['logo1.png']} />
            <header>
              <nav className="navbar">
                <button className="nav-item">TRANG CHỦ</button>
                <button className="nav-item">TUYỂN DỤNG</button>
                <button className="nav-item">BÀI VIẾT</button>
                <button className="nav-item">LIÊN LẠC</button>
              </nav>
            </header>
            </>
        )
    }
}
export default Navbar;