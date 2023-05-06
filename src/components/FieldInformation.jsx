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
                
                {item.position === "right" ? (
                    <section className="field" >
                    <img className="page" src={item.image}  data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200"/>
                    <blockquote data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200">
                        <h2 className={item.class}>{item.name}</h2>
                        
                        <p>{item.title}<strong className='p'> {item.subtitle}</strong></p>                    
                    </blockquote>
                    </section>
                ) : (
                    <section className="field" >
                    <blockquote data-aos="fade-right" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200">
                        <h2 className={item.class}>{item.name}</h2>
                        <p>{item.title}<strong className='p'> {item.subtitle}</strong></p>                     
                    </blockquote>
                    <img className="page" src={item.image} data-aos="fade-right" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" />
                    </section>
                )}
                
                
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