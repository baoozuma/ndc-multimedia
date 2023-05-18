import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/App.css';
import '../style/button.css';
import '../style/card.css';
import'../style/story.css';
import '../style/Apply.css';
import {Job} from '../contentDatabase/Job';
import {Routes, Route, Link} from 'react-router-dom';
import Review from "./Review";
const Apply = () => {
    AOS.init();
    return (
        <div className="apply">  
        
            <div className="space"></div>
            <h1>CƠ HỘI LÀM VIỆC VỚI <strong>CHÚNG TÔI - MULTIMEDIA</strong></h1>
            <section className="joblist" data-aos="fade-up" data-aos-duration="1000">
                {Job.map((item) => (
                    <div className="jobcard" >
                        <img src={item.image}></img>
                        <h2>{item.title}</h2>
                        <p><strong>Lĩnh vực:&nbsp;</strong>{item.field}</p>
                        <p><strong>Mô tả công việc:&nbsp;</strong>{item.description}</p>
                        <Link to={item.link}>ỨNG TUYỂN TẠI ĐÂY</Link>

                    </div>
                ))}
            </section>
        </div>
    )

}
export default Apply;