
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
import {Routes, Route} from 'react-router-dom';
import {Job} from './contentDatabase/Job';
import { motion } from 'framer-motion';
const App = () => {
  AOS.init();
  return (
    <body className='body'>
      <Navbar/>

      <Routes>
        <Route path="/ndc-multimedia/" element={<Home/>} />
        <Route path="/ndc-multimedia/apply" element={<Apply/>} />
        {Job.map((item) => (
              <Route path={item.link} element={<Review id={item.id}/>}></Route>
        ))}
        <Route path="/ndc-multimedia/login" element={<Login/>} />
        
      </Routes>

    </body>
    
  );
};
export default App;
