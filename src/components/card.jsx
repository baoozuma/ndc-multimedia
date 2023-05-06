import React, { Component } from "react";
import {memberDB} from "../contentDatabase/member";
import images from "./importImages";
export const card = (index) => {
    return (
      <div className="cardmain" data-aos="fade-right" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out">
      <div className="card-info">
        <img src={memberDB[index].avatar} className="card-avatar" />
        <div className="card-title">{memberDB[index].name}</div>
        <div className="card-subtitle">
          <h3>{memberDB[index].address}<br></br></h3>
          {memberDB[index].roles.map((role) => (
              <span>{role}<br/></span>
          ))}
          <p className='de'>{memberDB[index].description}</p>
        </div>
      </div>
      <ul className="card-social">
        {memberDB[index].facebook && (
          <li className="card-social__item">
            <a href={memberDB[index].facebook} target="_blank"><img className='icon' src={images['facebook.png']}  ></img></a>
          </li>
        )}
        {memberDB[index].youtube && (
          <li className="card-social__item">
            <a href={memberDB[index].youtube} target="_blank"><img className='icon' src={images['youtube.png']} ></img></a>
          </li>
        )}
        {memberDB[index].twitter && (
          <li className="card-social__item">
            <a href={memberDB[index].twitter} target="_blank"><img className='icon' src={images['twitter.png']} ></img></a>
          </li>
        )}
        {memberDB[index].instagram && (
          <li className="card-social__item">
            <a href={memberDB[index].instagram} target="_blank"><img className='icon' src={images['instagram.png']} ></img></a>
          </li>
        )}
        {memberDB[index].discord && (
          <li className="card-social__item">
            <a href={memberDB[index].discord} target="_blank"><img className='icon' src={images['discord.png']} ></img></a>
          </li>
        )}
        {memberDB[index].tiktok && (
          <li className="card-social__item">
            <a href={memberDB[index].tiktok} target="_blank"><img className='icon' src={images['tik-tok.png']} ></img></a>
          </li>
        )}
        {memberDB[index].github && (
          <li className="card-social__item">
            <a href={memberDB[index].github} target="_blank"><img className='icon' src={images['github.png']} ></img></a>
          </li>
        )}
      </ul>
    </div>
    )
  }