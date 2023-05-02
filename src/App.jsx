import './App.css';
import React, { Component } from "react";
import './button.css';
import './card.css';
import'./story.css';
import images from './components/importImages';
import {motion} from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { memberDB } from './contentDatabase/member';
import { aboutDB } from './contentDatabase/about4parts';
import { stories } from './contentDatabase/story';
class Hero extends Component {
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
        <section>
          <div className="border"><img className='girl' src={stories[0].image} ></img></div>
          <blockquote>
            <h3>{stories[0].title}</h3>
            <p>{stories[0].description}</p>
          </blockquote>
        </section>
        <section>
          <blockquote>
            <h3>{stories[1].title}</h3>
            <p>{stories[1].description}</p>
          </blockquote>
          <div><img className='boy' src={stories[1].image} ></img></div>
        </section>
        <section className='big'>
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
            <span>
              <img src={item.image} />
              <h4>{item.title}</h4> 
              <p>{item.description}</p>
            </span>
          ))}
        </div>
        <section className='answer'>
          <div className='bgp'><p> "Additionally, our team members are equipped with exceptional creative and design skills, which enables us to deliver high-quality and captivating multimedia content that stands out from the rest."</p></div>
          <div className='bgp'><p> "Additionally, our team members are equipped with exceptional creative and design skills, which enables us to deliver high-quality and captivating multimedia content that stands out from the rest."</p></div>
        </section>
        <div className='imgblock'>
          <img className='img img1' src={images['bg1.jpg']}></img>
          <img className='img img2' src={images['bg2.jpg']}></img>
          <img className='img img3' src={images['bg3.jpg']}></img>
          <img className='img img4' src={images['bg4.jpg']}></img>
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
class About extends Component {
  
  about = (
    <>
    <h1 className="memberintro">OUR LEADERS</h1>
    <div className="about ">
      {memberDB.map((item) => (
        <div className="cardmain">
          <div className="card-info">
            <img src={item.avatar} className="card-avatar" />
            <div className="card-title">{item.name}</div>
            <div className="card-subtitle">
              <h3>{item.andress}<br></br></h3>
              {item.roles.map((role) => (
                  <span>{role}<br/></span>
              ))}

            </div>
          </div>
          <ul className="card-social">
            {item.facebook && (
              <li className="card-social__item">
                <a href={item.facebook} target="_blank"><img className='icon' src={images['facebook.png']}  ></img></a>
              </li>
            )}
            {item.youtube && (
              <li className="card-social__item">
                <a href={item.youtube} target="_blank"><img className='icon' src={images['youtube.png']} ></img></a>
              </li>
            )}
            {item.twitter && (
              <li className="card-social__item">
                <a href={item.twitter} target="_blank"><img className='icon' src={images['twitter.png']} ></img></a>
              </li>
            )}
            {item.instagram && (
              <li className="card-social__item">
                <a href={item.instagram} target="_blank"><img className='icon' src={images['instagram.png']} ></img></a>
              </li>
            )}
            {item.discord && (
              <li className="card-social__item">
                <a href={item.discord} target="_blank"><img className='icon' src={images['discord.png']} ></img></a>
              </li>
            )}
            {item.tiktok && (
              <li className="card-social__item">
                <a href={item.tiktok} target="_blank"><img className='icon' src={images['tik-tok.png']} ></img></a>
              </li>
            )}
            {item.github && (
              <li className="card-social__item">
                <a href={item.github} target="_blank"><img className='icon' src={images['github.png']} ></img></a>
              </li>
            )}
          </ul>
        </div>
      ))}
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
    <body className='body bg-gradient-to-bl from-gray-800 via-gray-900 to-black'>
      <div></div>
      <Hero />
      <About />
    </body>
    
  );
};
export default App;
