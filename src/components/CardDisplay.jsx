import React, { Component } from "react";
import {memberDB} from "../contentDatabase/member";
import images from "./importImages";

const card = (index) => {
    return (
      <div className="cardmain" >
      <div className="card-info">
        <img src={index.avatar} className="card-avatar" />
        <div className="card-title">{index.name}</div>
        <div className="card-subtitle">
          <h3>{index.address}<br></br></h3>
          {index.roles.map((role) => (
              <span>{role}<br/></span>
          ))}
          <p className='de'>{index.description}</p>
        </div>
      </div>
      <ul className="card-social">
        {index.facebook && (
          <li className="card-social__item">
            <a href={index.facebook} target="_blank"><img className='icon' src={images['facebook.png']}  ></img></a>
          </li>
        )}
        {index.youtube && (
          <li className="card-social__item">
            <a href={index.youtube} target="_blank"><img className='icon' src={images['youtube.png']} ></img></a>
          </li>
        )}
        {index.twitter && (
          <li className="card-social__item">
            <a href={index.twitter} target="_blank"><img className='icon' src={images['twitter.png']} ></img></a>
          </li>
        )}
        {index.instagram && (
          <li className="card-social__item">
            <a href={index.instagram} target="_blank"><img className='icon' src={images['instagram.png']} ></img></a>
          </li>
        )}
        {index.discord && (
          <li className="card-social__item">
            <a href={index.discord} target="_blank"><img className='icon' src={images['discord.png']} ></img></a>
          </li>
        )}
        {index.tiktok && (
          <li className="card-social__item">
            <a href={index.tiktok} target="_blank"><img className='icon' src={images['tik-tok.png']} ></img></a>
          </li>
        )}
        {index.github && (
          <li className="card-social__item">
            <a href={index.github} target="_blank"><img className='icon' src={images['github.png']} ></img></a>
          </li>
        )}
      </ul>
    </div>
    )
  }
class CardDisplay extends Component {
  render() {
    return(
      <div className="cardmember">

        <h1>GẶP GỠ<strong>&nbsp;ĐỘI NGŨ CHÍNH</strong>&nbsp;CỦA MULTIMEDIA</h1>
        <div className="cardlist">
          {memberDB.map((item) => (
              card(item)
          ))}

        </div>
      </div>


    )
  }
}
export default CardDisplay;