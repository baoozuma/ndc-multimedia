import './App.css';
import React, { Component } from "react";
import './button.css';
import './card.css';
import'./story.css';
import images from './components/importImages';
import {motion} from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { aboutDB } from './contentDatabase/about4parts';
import { stories } from './components/story';
import { Link, animateScroll as scroll } from 'react-scroll';
import {card} from './components/card';
import FieldInformation from './contentDatabase/field';
class Hero extends Component {
  navbar = (
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
  );
  card = (
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
  );
  background = (
    <div className='Hero-background'></div>
  )
  search = (
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
      to="about"
      spy={true}
      smooth={true}
      offset={-70}
      duration={3000}><button className="btn see">SEE OUR WORK</button></Link>
    </div>

    
    </>
  )
  bg = (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </>
  )
  
  description = (
    <div className='description' >
        <h1 className='who'>ABOUT US</h1>
        <div className="story">
        <section data-aos="fade-right" data-aos-once="true" data-aos-duration="500"data-aos-easing="ease-in-out">
          <div className="border"><img className='girl' src={stories[0].image} ></img></div>
          <blockquote>
            <h3>{stories[0].title}</h3>
            <p>{stories[0].description}</p>
          </blockquote>
        </section>
        <section data-aos="fade-left" data-aos-once="true" data-aos-duration="500"  data-aos-easing="ease-in-out">
          <blockquote>
            <h3>{stories[1].title}</h3>
            <p>{stories[1].description}</p>
          </blockquote>
          <div><img className='boy' src={stories[1].image} ></img></div>
        </section>
        <section className='big' data-aos="fade-up"  data-aos-once="true" data-aos-duration="800"  data-aos-easing="ease-in-out">
        
          <blockquote>
            <h3>{stories[2].title}</h3>
            <p>{stories[2].description}</p>
          </blockquote>
          <img className='stand' src={stories[2].image} ></img>
          
          
        </section>
        </div>
        <h1 className='res'>OUR TARGET</h1>
        <div className="article" >
          
          {aboutDB.map((item) => (
            <span data-aos="fade-up"  data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="true">
              <img src={item.image} />
              <h4>{item.title}</h4> 
              <p>{item.description}</p>
            </span>
          ))}
        </div>

        <div className='imgblock' data-aos="fade-up" data-aos-once="true" data-aos-duration="500"  data-aos-easing="ease-in-out">
          <img className='img' src={images['bg1.jpg']}></img>
          <img className='img' src={images['bg2.jpg']}></img>
          <img className='img' src={images['bg3.jpg']}></img>
          <img className='img' src={images['bg4.jpg']}></img>
          <img className='img' src={images['bg5.jpg']}></img>
          <img className='img' src={images['bg6.jpg']}></img>
          <img className='img' src={images['bg7.jpg']}></img>
          <img className='img' src={images['bg8.jpg']}></img>
          <img className='img' src={images['bg9.png']}></img>
          <img className='img' src={images['bg10.jpg']}></img>

        </div>
    </div>
  )
  footer = (
    <footer>This is a footer</footer>
  )

  render() {
    return (
      <>
        {this.navbar}
        {this.card}
        {this.search}
        {this.description}
        {/* {this.bg} */}
        {this.footer} 
        {/* {this.line} */}

      </>
    );
  }
}

class About extends Component {
  
  about = (
    <>
    <h1 className="memberintro">SEE OUR TEAMS</h1>
    <FieldInformation/>
    </>
  );
  sponsor = (
    <>
      <div className='sponsorgroup'>
        
      </div>
    </>
  );
  render() {
    return (
      <>
        {this.about} 
        {this.description}
      </>
    );
  }
}
const App = () => {
  AOS.init();
  return (
    <body className='body'>
      <div></div>
      <Hero />
      <About />
    </body>
    
  );
};
export default App;
