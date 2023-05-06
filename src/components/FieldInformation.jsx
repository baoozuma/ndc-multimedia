import images from './importImages';
import {card} from "./card";
import React, { Component } from "react";
import {field} from "../contentDatabase/Field";

class FieldInformation extends Component {
    render() {
    return (
        <>       
        <h1 className="memberintro">SEE OUR TEAMS</h1>
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
        </>  
    )
    }
}
export default FieldInformation;