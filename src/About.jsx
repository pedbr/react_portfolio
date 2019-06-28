import React, { useState } from "react";
import ReactMapGL from "react-map-gl";


const About = () => {
    const [viewport, setViewport] = useState({
        latitude: 49.133097,
        longitude: 10.015682,
        width: '100vw',
        height: '100vh',
        zoom: 100
    });

    return (
        <div>
        <ReactMapGL {...viewport}>markers here</ReactMapGL>
        </div>
        
    )
    
}


export default About