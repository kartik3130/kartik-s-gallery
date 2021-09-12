import React from "react";
import './index.css'
import Common from "./Common";
import web from "/Users/kartikpatidar/Desktop/react-tutorial/normal_web/src/image/1_jWx9suY2k3Ifq4B8A_vz9g.jpeg"
const About = () => {
    return (
        <>
            <Common name="Somthing you should know about : " imgsrc={web} visit='/contact' btname='Contact Us' />
        </>
    )
};

export default About;