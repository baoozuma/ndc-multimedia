
import './style/App.css';
import React, { Component } from "react";
import './style/button.css';
import './style/card.css';
import'./style/story.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Review from './pages/Review';
import Login from './pages/Login';
import Post from './pages/Post';
import {Routes, Route} from 'react-router-dom';
import {Job} from './contentDatabase/Job';
import {Thumbnail} from './contentDatabase/PostesThumbnail';
import { motion } from 'framer-motion';
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  AOS.init();
  return (
    <body className='body'>
      <Navbar/>
      <ScrollToTop smooth className="scroll" width="20" height="20" />
      <Routes>
        <Route path="/ndc-multimedia/" element={<Home/>} />
        <Route path="/ndc-multimedia/apply" element={<Apply/>} />
        {Job.map((item) => (
              <Route path={item.link} element={<Review id={item.id}/>}></Route>
        ))}
        <Route path="/ndc-multimedia/login" element={<Login/>} />
        <Route path="/ndc-multimedia/post" element={<Post/>} />
        {Thumbnail.map((tem) => (
              <Route path={tem.link} element={<Review id={tem.id}/>}></Route>
        ))}
        
      </Routes>

    </body>
    
  );
};
export default App;
