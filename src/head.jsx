/* The above code is a React application that creates a website for a multimedia club. It includes
components for a navbar, a card with links to different areas of the club, a search section with a
typing effect and animated icons, and an about section with information about the club's values and
activities. The code also imports images and uses Framer Motion and React Tooltip libraries for
animation and tooltips. */
import './App.css';
import React from 'react';
import { useEffect } from "react";
import './button.css';
import './card.css';
import images from './components/importImages';
import {motion} from "framer-motion";

import AOS from 'aos';
import 'aos/dist/aos.css';


class Hero extends React.Component {
   head = (

    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:title" content="__OG_TITLE__" />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <script async src="//jsfiddle.net/1mcr7x50/2/embed/"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/typewriter-effect/dist/core.css"
      />
    </head>
  );
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
      <a className="card1">
        <span>Thiết kế</span>
      </a>
      <a className="card2">
        <span>Dựng phim</span>
      </a>
      <a className="card3">
        <span>Truyền thông</span>
      </a>
      <a className="card4">
        <span>Lập trình</span>
      </a>
      <a className="card5">
        <span>Điện ảnh</span>
      </a>
    </div>
  );
  line = (
    <div className="line" data-aos="fade-left">This is a line</div>
  )
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
      <button className="btn explore">LEARN MORE</button>
      <button className="btn see">SEE OUR WORK</button>
    </div>
    <div className="input-group seeinput">
      <input
        type="email"
        className="input"
        id="Email"
        name="Email"
        placeholder="Leave your email address here..."
        autoComplete="off"
      />
      <input className="button--submit" defaultValue="Subscribe" type="submit" />
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
        <h1 className='who'data-aos="fade-right" data-aos-duration="700">ABOUT US</h1>
        <div className="article" data-aos="fade-right" data-aos-duration="700"data-aos-delay="600">
          <span>
            <h4>Connecting people</h4> 
            <p>Praesent tincidunt enim eu mollis fermentum. Vestibulum molestie purus quis urna eleifend posuere..</p>
          </span>
          <span>
            <h4>Be responsible</h4> 
            <p>Praesent tincidunt enim eu mollis fermentum. Vestibulum molestie purus quis urna eleifend posuere.</p>
          </span>
          <span>
            <h4>UI/UX Designer</h4>
            <p>Praesent tincidunt enim eu mollis fermentum. Vestibulum molestie purus quis urna eleifend posuere.</p>
          </span>
          <span>
            <h4>Front-end Dev</h4>
            <p>Praesent tincidunt enim eu mollis fermentum. Vestibulum molestie purus quis urna eleifend posuere.</p>
          </span>
        </div>
        <section className='answer'>
          <div className='bgp'><p data-aos="fade-right" data-aos-duration="700" data-aos-delay="200"> "We are a multimedia club that specializes in video production, graphic design, music, and other related activities. Our members possess expertise in multimedia software and hardware technologies, as well as creative and design skills."</p></div>
          <div className='bgp'><p data-aos="fade-right" data-aos-duration="700" data-aos-delay="200"> "Additionally, our team members are equipped with exceptional creative and design skills, which enables us to deliver high-quality and captivating multimedia content that stands out from the rest."</p></div>
        </section>
        <div className='imgblock' data-aos="fade-right" data-aos-duration="700">
          <img className='img1' src={images['bg1.jpg']}></img>
          <img className='img2' src={images['bg2.jpg']}></img>
          <img className='img3' src={images['bg3.jpg']}></img>
          <img className='img4' src={images['bg4.jpg']}></img>
        </div>
    </div>
  )
  footer = (
    <footer>This is a footer</footer>
  )

  render() {
    return (
      <>

        {this.head}
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
class About extends React.Component {

  about = (
    
    <div className="about">
      <article className="cardmain">
        <div className="temporary_text"></div>
        <div className="card_content">
          <span className="card_title">Nguyễn Lý Tính</span>
          <span className="card_subtitle">
            Thsi is a subtitle of this page. Let us see how it looks on the Web.
          </span>
          <p className="card_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, turpis in volutpat bibendum, dui justo facilisis tortor, id lobortis ex nisl vel justo.          </p>
        </div>
      </article>
      <article className="cardmain">
        <div className="temporary_text"></div>
        <div className="card_content">
          <span className="card_title">Trần Ngô Thành Bình</span>
          <span className="card_subtitle">
            Thsi is a subtitle of this page. Let us see how it looks on the Web.
          </span>
          <p className="card_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, turpis in volutpat bibendum, dui justo facilisis tortor, id lobortis ex nisl vel justo.
          </p>
        </div>
      </article>
      <article className="cardmain">
        <div className="temporary_text"></div>
        <div className="card_content">
          <span className="card_title">Phạm Ngọc Gia Bảo</span>
          <span className="card_subtitle">
            Thsi is a subtitle of this page. Let us see how it looks on the Web.
          </span>
          <p className="card_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, turpis in volutpat bibendum, dui justo facilisis tortor, id lobortis ex nisl vel justo.
          </p>
        </div>
      </article>
      <article className="cardmain">
        <div className="temporary_text"></div>
        <div className="card_content">
          <span className="card_title">Lê Trường Khải</span>
          <span className="card_subtitle">
            Thsi is a subtitle of this page. Let us see how it looks on the Web.
          </span>
          <p className="card_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, turpis in volutpat bibendum, dui justo facilisis tortor, id lobortis ex nisl vel justo.
          </p>
        </div>
      </article>
     
    </div>
  );
  render() {
    return (
      <>
        {/* {this.about} */}
        {this.description}
      </>
    );
  }
}
const App = () => {
  AOS.init();
  return (
    <body className='body bg-gradient-to-bl from-gray-800 via-gray-900 to-black'>
      <div></div>
      <Hero />
    </body>
    
  );
};
export default App;