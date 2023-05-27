import React, { Component } from "react";
import AOS from 'aos';
import {Thumbnail} from "../contentDatabase/PostesThumbnail";
import 'aos/dist/aos.css';
import '../style/App.css';
import '../style/Post.css';
import {Routes, Route, Link} from 'react-router-dom';
const Post = () => {
    AOS.init();
    return (
        <div className="post">
            <h1 className="postpage_title">BÀI VIẾT NỔI BẬT</h1>
            <div className="post_field">
                <div className="post_container">
                    {Thumbnail.map((item) => (
                        <Link to={item.url} className="detail">
                            <img src={item.image} alt="" />
                            <div className="detail_text">
                                <h2 className="post_title">{item.title}</h2>
                                <p className="topic">Topic: <strong>{item.topic}</strong></p>
                                <p className="post_subtitle">{item.subtitle}</p>
                            </div>
                            
                            

                        </Link>
                    ))}
                </div>
                <div className="post_search"></div>
            </div>
        </div>
       
    )

}
export default Post;