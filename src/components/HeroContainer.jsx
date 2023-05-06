import React, { Component } from "react";
import images from './importImages';
import { Link, animateScroll as scroll } from 'react-scroll';
import {motion} from "framer-motion";
class HeroContainer extends Component {
    render() {
    return(
        <>
        <div className="container">
            <h2 className="title sub" id="typed-text"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>Donec tristique maximus metus, vel porttitor massa interdum sed.</h2>
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
        <div className="startbutton">
        <Link
        activeClass="active"
        to="description"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}><button className="btn explore">LEARN MORE</button></Link>
        <Link
        activeClass="active"
        to="brand"
        spy={true}
        smooth={true}
        offset={-70}
        duration={3000}><button className="btn see">SEE OUR WORK</button></Link>
    </div>
    </>
    )
    }
}
export default HeroContainer;