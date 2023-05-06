import React, { Component } from "react";
import {Brand} from "../contentDatabase/Brand"
import AOS from 'aos';
import 'aos/dist/aos.css';
class Sponsor extends Component {
    render() {
        return (
            <section className="brand" data-aos="fade-right" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" >
                <h1>OUR SPONSOR</h1>
                <p>We would like to express our deepest gratitude to our sponsor for their generous support. It is with their help that we are able to achieve our goals and bring our vision to life. We recognize the value of their contribution and are incredibly thankful for their continued partnership.</p>
                <div className="local">
                    {Brand.map((item) => (
                        <div className="brand-item">
                            <img src={item.logo} className="brand-logo"></img>
                            <h4 className="brand-name">{item.name}</h4>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}
export default Sponsor;