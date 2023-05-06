import AOS from 'aos';
import 'aos/dist/aos.css';
import { aboutDB } from '../contentDatabase/About4Parts';
import { stories } from '../contentDatabase/Story';
import images from './importImages';
import React, { Component } from "react";
class MainDescription extends Component {
    render() {
    return(
        <>
        
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
    </>
    )
    }
}
export default MainDescription;