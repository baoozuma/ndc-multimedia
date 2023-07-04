import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Job} from '../contentDatabase/Job';
import Slider from "react-slick";
import Button from '@mui/material/Button';
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const Review = (props) => {
    const jobReview = Job[props.id];
    return (
        <div className="jobreview">
            <div className="jobtitle">
                <img src={jobReview.image}/> 
                <section className="head">
                    <h1>{jobReview.title}</h1>
                    <h2>Multimedia Cinematic</h2>
                </section>
            </div>
            <section className="review">
                    <h1>Mô tả công việc</h1>
                    <p>{jobReview.description_detail}</p>
                    <h1>Kỹ năng cần thiết</h1>
                    <ul>
                        {jobReview.skill.map((item) => (
                                <li key={item}><p>{item}</p></li>
                        ))}
                    </ul>
                    <h1>Yêu cầu phẩm chât</h1>
                    <ul>
                        {jobReview.skill.map((item) => (
                                <li key={item}><p>{item}</p></li>
                        ))}
                    </ul>
            </section>
            <Slider {...settings} className="slide">
                {jobReview.pictures.map((item) => (
                    <img src={item} className='reviewpicture'></img>
                ))}
            </Slider>
            <Button variant="contained" className="applybutton"><Link to="/ndc-multimedia/form">ỨNG TUYỂN NGAY</Link></Button>
        </div>
    )
}
export default Review;