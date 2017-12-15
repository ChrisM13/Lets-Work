import React from 'react';
import './LandingVideo.css'

const LandingVideo = () => {
    return(
        <div>
            <h1 className="landingPage">Lets Work</h1>
            <h4 className="landingPage1">An Easy and Efficient Way to </h4>
            <h4 className="landingPage1">Keep Track Of Your Employees' Schedule</h4>
            <video type="video/mp4" autoPlay loop id="video-background" muted>
                    <source src="assets/video/lets-work.mp4" />
            </video>
        </div>
    )
}

export default LandingVideo