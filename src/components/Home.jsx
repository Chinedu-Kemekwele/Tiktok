import React from "react";
import "../styles/Home.css";
import logo from '../assets/logo.png'
import VideoCard from "./VideoCard";

function Home() {
  return (
    <>
      <div className="app_top">
        <img src={logo} alt="logo" className="app_logo" />
        <h3>Shorts</h3>
      </div>

      <div className="app_videos">

      <VideoCard 
      url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
      channel="TWD"
      avatarSrc="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg"
      song="I am a Windows PC"
      likes={950}
      shares={200}
      
      />
      <VideoCard />
      </div>
     
    </>
  );
}

export default Home;
