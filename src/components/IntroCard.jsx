import images from "./importImages";
import React, { Component } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
class CardIntro extends Component {
    render() {
        return (
            <div className="card intro" data-aos="fade-up" data-aos-duration="1000">
                <Link
                activeClass="active"
                to="boxfield"
                spy={true}
                smooth={true}
                offset={-70}
                duration={3000}
                className="card1">
                    <span>Thiết kế</span>
                </Link>
                <Link 
                activeClass="active"
                to="boxfield"
                spy={true}
                smooth={true}
                offset={-70}
                duration={3000}
                className="card2">
                    <span>Dựng phim</span>
                </Link>
                <Link
                activeClass="active"
                to="boxfield"
                spy={true}
                smooth={true}
                offset={-70}
                duration={3000} 
                className="card3">
                    <span>Truyền thông</span>
                </Link>
                <Link
                activeClass="active"
                to="boxfield"
                spy={true}
                smooth={true}
                offset={-70}
                duration={3000} 
                className="card4">
                    <span>Lập trình</span>
                </Link>
                <Link
                activeClass="active"
                to="boxfield"
                spy={true}
                smooth={true}
                offset={-70}
                duration={3000} 
                className="card5">
                    <span>Điện ảnh</span>
                </Link>
            </div>
      )   
    }
}
export default CardIntro;