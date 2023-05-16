import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/App.css';
import '../style/button.css';
import '../style/card.css';
import'../style/story.css';
import {Job} from '../contentDatabase/Job';
const Apply = () => {
    AOS.init();
    return (
        <div className="apply">  
        
            <div className="space"></div>
            <h1>CƠ HỘI LÀM VIỆC VỚI <strong>CHÚNG TÔI - MULTIMEDIA</strong></h1>
            <section className="joblist">
                {Job.map((item) => (
                    <div className="jobcard">
                        <img src={item.image}></img>
                        <h2>{item.title}</h2>
                        <p><strong>Số lượng:&nbsp;</strong>{item.amount}</p>
                        <p><strong>Mô tả công việc:&nbsp;</strong>{item.description}</p>
                        <p><strong>Yêu cầu cần thiết:&nbsp;</strong>{item.require}</p>
                        <a href="#">Ứng tuyển tại đây</a>

                    </div>
                ))}
            </section>
        </div>
    )

}
export default Apply;