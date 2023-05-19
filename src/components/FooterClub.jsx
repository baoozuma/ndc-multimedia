import React, { Component } from "react";
import images from './importImages';
import Link from '@mui/material/Link';
import { FootLink } from "../contentDatabase/FootLink";
import { SocialIcon } from "../contentDatabase/SocialMedia";
class FooterClub extends Component {
    render() {
        return (
            <footer className = "footer"data-aos="fade-right"  data-aos-once="true" data-aos-duration="500"  data-aos-easing="ease-in-out">
                <div className="contact" >
                    <img className="logo" src={images['logo2.png']}>
                    </img>
                    <h2 className="contact_title">Keep up to date</h2>
                    <h3 className="contact_subtitle">Join our newsletter for regular updates. No spam ever.</h3>
                    <p className="emailtype">Enter your email here:</p>
                    <div className="input-group">
                    <input
                        type="email"
                        className="input"
                        id="Email"
                        name="Email"
                        placeholder="uiverse@verse.io"
                        autoComplete="off"
                    />
                    <input className="button--submit" defaultValue="Subscribe" type="submit" />
                    </div>
                </div>
                
                <div className="credit">
                {FootLink.map((section, index) => (
                        <section key={index}>
                            <h3>{section.title}</h3>
                            {section.link.map((link, linkIndex) => (
                                <Link
                                    key={linkIndex}
                                    href={section.href[linkIndex]}
                                    underline="none"
                                    className="link"
                                >
                                    {link}
                                </Link>
                            ))}
                        </section>
                    ))}
                </div>
                <div className="bottom_nav">
                    {SocialIcon.map((item) => (

                        <a href={item.link} className="linkmedia"><img src={item.icon}></img></a>
                    ))}
                </div>
            </footer>
        )
    }
}
export default FooterClub;
