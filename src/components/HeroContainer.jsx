import React, { Component } from "react";
import images from './importImages';
import { Link, animateScroll as scroll } from 'react-scroll';
import {motion} from "framer-motion";
class HeroContainer extends Component {
    render() {
    return(
        <>
        <div className="background"></div>
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="title sub" id="typed-text">HI THERE, IT'S <strong>MULTIMEDIA CLUB</strong><br/>Are you a creative spirit looking for a fun way to express yourself? Let's get started!</h2>
            <div className="banner">
            <motion.div
                animate={{
                y: [0,10,-10,0]
                }}
                transition={{repeat: Infinity, duration: 7, ease: "easeInOut",delay: 0.5}}
                >
                <img className="banner-icon camera" src={images['camera.png']} />
            </motion.div>
            <motion.div
                animate={{
                y: [0,10,-10,0]
                }}
                transition={{repeat: Infinity, duration: 7, ease: "easeInOut"}}
                >
                <img className="banner-icon clapboard" src={images['clapboard.png']} />
            </motion.div>
            <motion.div
                animate={{
                y: [0,10,-10,0]
                }}
                transition={{repeat: Infinity, duration: 7, ease: "easeInOut",delay: 0.7}}
                >
                <img className="banner-icon smartphone" src={images['smartphone.png']} />
            </motion.div>
            <motion.div
                animate={{
                y: [0,10,-10,0]
                }}
                transition={{repeat: Infinity, duration: 7, ease: "easeInOut",delay: 0.8}}
                >
                <img className="banner-icon film-reel" src={images['film-reel.png']} />
            </motion.div>
            <motion.div
                animate={{
                y: [0,10,-10,0]
                }}
                transition={{repeat: Infinity, duration: 7, ease: "easeInOut",delay: 0.8}}
                >
                <img className="banner-icon video-camera" src={images['video-camera.png']} />
            </motion.div>
            
        </div>
            
        </div>
        <div className="startbutton" data-aos="fade-up" data-aos-duration="1000">
        <Link
        activeClass="active"
        to="article"
        spy={true}
        smooth={true}
        offset={-70}
        duration={2000}><button className="btn explore">KHÁM PHÁ</button></Link>
        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={2000}><button className="btn see">CÔNG VIỆC</button></Link>
    </div>
    </>
    )
    }
}
export default HeroContainer;