import './style/App.css';
import React, { Component } from "react";
import './style/button.css';
import './style/card.css';
import'./style/story.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import CardIntro from './components/IntroCard';
import HeroContainer from './components/HeroContainer';
import MainDescription from './components/MainDescription';
import Sponsor from './components/Sponsor';
import VerticalTabs from './components/FTab';
import CardDisplay from './components/CardDisplay';
import FeedBack from './components/Feed';
import Gallery from './components/Gallery';
const App = () => {
  AOS.init();
  return (
    <body className='body'>
      
      <HeroContainer/>
      <Navbar/>
      <CardIntro/>
      <MainDescription/>
      <VerticalTabs/>
      <CardDisplay/>
      <Gallery/>
      <FeedBack/>
      <Sponsor/>

    </body>
    
  );
};
export default App;
