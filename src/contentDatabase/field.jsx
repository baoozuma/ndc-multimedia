import images from '../components/importImages';
import {card} from "../components/card";
import React, { Component } from "react";
import '../card.css';
const field = [
    {
        name: "DESIGN TEAM",
        class: "design",
        title: "Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.",
        subtitle: "The development of Multimedia’ s website is guided by an international team, some of whom have chosen to be featured below.",
        image: images['designteam.png'],
        memberID: [0,4,5,6],
        position: "right",
    },
    {
        name: "FILMING TEAM",
        class: "film",
        title: "Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.",
        subtitle: "The development of Multimedia’ s website is guided by an international team, some of whom have chosen to be featured below.",
        image: images['film.jpg'],
        memberID: [7,8,9,10],
        position: "left",
    },
    {
        name: "MEDIA TEAM",
        class: "design",
        title: "Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.",
        subtitle: "The development of Multimedia’ s website is guided by an international team, some of whom have chosen to be featured below.",
        image: images['media.jpg'],
        memberID: [11,12,13,14],
        position: "right",
    },
    {
        name: "SOFTWARE TEAM",
        class: "dev",
        title: "Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.",
        subtitle: "The development of Multimedia’ s website is guided by an international team, some of whom have chosen to be featured below.",
        image: images['webpage.png'],
        memberID: [1,2,3,19],
        position: "left",
    },
    {
        name: "CAST TEAM",
        class: "cast",
        title: "Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.",
        subtitle: "The development of Multimedia’ s website is guided by an international team, some of whom have chosen to be featured below.",
        image: images['cast.jpg'],
        memberID: [15,16,21,18],
        position: "right",
    }
]

class FieldInformation extends Component {
    render() {
    return (        
        <div className="about">
            {field.map((item) => (
                <div className='plat'>
                <section className="field"data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" >
                {item.position === "right" ? (
                    <>
                    <img className="page" src={item.image} />
                    <blockquote>
                        <h2 className={item.class}>{item.name}</h2>
                        <p>Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.</p>                    </blockquote>
                    </>
                ) : (
                    <>
                    <blockquote>
                        <h2 className={item.class}>{item.name}</h2>
                        <p>Our team has created a multimedia webpage that showcases the best of our skills and creativity. From stunning visuals to engaging content, we have designed every element to captivate your senses and leave a lasting impression.</p>                    </blockquote>
                    <img className="page" src={item.image} />
                    </>
                )}
                </section>
                <p className='p' data-aos="fade-right" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out">{item.subtitle}</p>
                <section className="cardgroup">
                    {item.memberID.map((id) => (
                        card(id)
                    ))}
                </section>
              </div>
              
            ))}
        </div>   
    )
    }
}
export default FieldInformation;