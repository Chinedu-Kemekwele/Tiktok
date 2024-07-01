import React,{useState, useRef} from 'react'
import '../styles/VideoCard.css'
import vid from '../assets/vid.mp4'

import VideoFooter from './VideoFooter'

import VideoHeader from './VideoHeader'

function VideoCard({url,channel,avatarSrc,song,likes,shares}) {

    const [playing,setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handleVideoPress = () =>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)
        }
    }

  return (
    <div className="videoCard">
        <VideoHeader />
        
        <video 
        src={url}
        className = "videoCard_player"
        alt = 'short'
        ref={videoRef}
        onClick={handleVideoPress}
        loop

        />

        <VideoFooter
        channel = {channel}
        likes = {likes}
        avatarSrc = {avatarSrc}
        song = {song}
        shares = {shares}
        
        />
    </div>
  )
}

export default VideoCard