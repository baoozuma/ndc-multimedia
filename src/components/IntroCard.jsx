import images from "./importImages";
import React, { Component } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
class CardIntro extends Component {
    render() {
        return (
            <div className="card intro">
                <Link
                activeClass="active"
                to="design"
                spy={true}
                smooth={true}
                offset={-70}
                duration={3000}
                className="card1">
                    <span>Thiết kế</span>
                </Link>
                <Link 
                activeClass="active"
                to="film"
                spy={true}
                smooth={true}
                offset={-70}
                duration={3000}
                className="card2">
                    <span>Dựng phim</span>
                </Link>
                <Link
                activeClass="active"
                to="media"
                spy={true}
                smooth={true}
                offset={-70}
                duration={3000} 
                className="card3">
                    <span>Truyền thông</span>
                </Link>
                <Link
                activeClass="active"
                to="dev"
                spy={true}
                smooth={true}
                offset={-70}
                duration={3000} 
                className="card4">
                    <span>Lập trình</span>
                </Link>
                <Link
                activeClass="active"
                to="cast"
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