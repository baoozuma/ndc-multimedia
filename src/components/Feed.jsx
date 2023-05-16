import React, { Component } from "react";
import {memberDB} from "../contentDatabase/Member";
import images from "./importImages";
import Slider from "react-slick";
import { FeedClub } from "../contentDatabase/FeedbackAboutClub";
import { ShortStatistic } from "../contentDatabase/ShortStatistic";

const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

class FeedBack extends Component {
    render() {
        return (
            <div className="feedback" data-aos="fade-left"  data-aos-once="true" data-aos-duration="500"  data-aos-easing="ease-in-out">
                <Slider {...settings} className="people">
                    {FeedClub.map((item) => (
                        <section className='person'>
                            <q>{item.feedback}</q>
                            <div className="infor">
                                <img src={item.avatar}></img>
                                <p className='name'><strong>{item.name},</strong>&nbsp; {item.role}</p>
                            </div>
                        </section>
                    ))}
                </Slider>
                <section className="statistic">
                    {ShortStatistic.map((item) => (
                        <div className="item">
                            <h2 className="amount">{item.amount}</h2>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </section>

            </div>
        )
    }
}
export default FeedBack;