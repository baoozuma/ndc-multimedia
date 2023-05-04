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
import { Link, animateScroll as scroll } from 'react-scroll';
const card = (index) => {
  return (
    <div className="cardmain" data-aos="fade-right" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out">
    <div className="card-info">
      <img src={memberDB[index].avatar} className="card-avatar" />
      <div className="card-title">{memberDB[index].name}</div>
      <div className="card-subtitle">
        <h3>{memberDB[index].address}<br></br></h3>
        {memberDB[index].roles.map((role) => (
            <span>{role}<br/></span>
        ))}
        <p className='de'>{memberDB[index].description}</p>
      </div>
    </div>
    <ul className="card-social">
      {memberDB[index].facebook && (
        <li className="card-social__item">
          <a href={memberDB[index].facebook} target="_blank"><img className='icon' src={images['facebook.png']}  ></img></a>
        </li>
      )}
      {memberDB[index].youtube && (
        <li className="card-social__item">
          <a href={memberDB[index].youtube} target="_blank"><img className='icon' src={images['youtube.png']} ></img></a>
        </li>
      )}
      {memberDB[index].twitter && (
        <li className="card-social__item">
          <a href={memberDB[index].twitter} target="_blank"><img className='icon' src={images['twitter.png']} ></img></a>
        </li>
      )}
      {memberDB[index].instagram && (
        <li className="card-social__item">
          <a href={memberDB[index].instagram} target="_blank"><img className='icon' src={images['instagram.png']} ></img></a>
        </li>
      )}
      {memberDB[index].discord && (
        <li className="card-social__item">
          <a href={memberDB[index].discord} target="_blank"><img className='icon' src={images['discord.png']} ></img></a>
        </li>
      )}
      {memberDB[index].tiktok && (
        <li className="card-social__item">
          <a href={memberDB[index].tiktok} target="_blank"><img className='icon' src={images['tik-tok.png']} ></img></a>
        </li>
      )}
      {memberDB[index].github && (
        <li className="card-social__item">
          <a href={memberDB[index].github} target="_blank"><img className='icon' src={images['github.png']} ></img></a>
        </li>
      )}
    </ul>
  </div>
  )
}
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
    <h1 className="memberintro">SEE OUR TEAMS</h1>
    
    <div className="about">
      <div className='plat'>
        <section className="field"data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" >
          <blockquote>
            <h2 className='design'>DESIGN TEAM</h2>
            <p>Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.</p>
          </blockquote>
          <img className="page"src={images['designteam.png']}></img>
        </section>
        <p className='p' data-aos="fade-down" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out">The development of Multimedia’ s website is guided by an international team, some of whom have chosen to be featured below.</p>
        <section className="cardgroup">
          {card(0)}
          {card(4)}
          {card(5)}
          {card(6)}
        </section>
      </div>
      <div className='plat'>
        <section className="field"data-aos="fade-right" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" >
        <img className="page"src={images['webpage.png']}></img>
          <blockquote>
            <h2 className='dev'>SOFTWARE TEAM</h2>
            <p>Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.</p>
          </blockquote>
        </section>
        <p className='p' data-aos="fade-down" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out">The development of Multimedia’ s website is guided by an international team, some of whom have chosen to be featured below.</p>
        <section className="cardgroup">
          {card(1)}
          {card(2)}
          {card(3)}
          {card(20)}
        </section>
      </div>
      <div className='plat'>
        <section className="field"data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" >
          <blockquote>
            <h2 className='film'>FILMING TEAM</h2>
            <p>Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.</p>
          </blockquote>
          <img className="page"src={images['film.jpg']}></img>
        </section>
        <p className='p' data-aos="fade-down" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out">The development of Multimedia’ s website is guided by an international team, some of whom have chosen to be featured below.</p>
        <section className="cardgroup">
          {card(7)}
          {card(8)}
          {card(9)}
          {card(10)}
        </section>
      </div>
      <div className='plat'>
        <section className="field"data-aos="fade-right" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" >
        <img className="page"src={images['media.jpg']}></img>
          <blockquote>
            <h2 className='media'>MEDIA TEAM</h2>
            <p>Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.</p>
          </blockquote>
            
        </section>
        <p className='p' data-aos="fade-down" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out">The development of Multimedia’ s website is guided by an international team, some of whom have chosen to be featured below.</p>
        <section className="cardgroup">
          {card(11)}
          {card(12)}
          {card(13)}
          {card(14)}
        </section>
      </div>
      <div className='plat'>
        <section className="field"data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" >
          <blockquote>
            <h2 className='cast'>CAST TEAM</h2>
            <p>Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.</p>
          </blockquote>
            <img className="page"src={images['cast.jpg']}></img>
        </section>
        <p className='p' data-aos="fade-down" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out">The development of Multimedia’ s website is guided by an international team, some of whom have chosen to be featured below.</p>
        <section className="cardgroup">
          {card(19)}
          {card(21)}
          {card(17)}
          {card(18)}
        </section>
      </div>
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
