import React from "react"; 
import './index.css'
import Common from "./Common";
import web from "/Users/kartikpatidar/Desktop/react-tutorial/normal_web/src/image/IMG_20210908_153439.jpg"
const Home = () => {
    return (
        <>
            <Common name="Improve your Skills With :  " imgsrc={web} visit='/services' btname='Get Started' />
        </>
    )
};

export default Home;