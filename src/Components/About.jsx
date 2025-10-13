import { useState } from "react"
import Skills from "./Skills"
import Certificate from "./Certificate"
import Intro from "../Assets/Intro.jpg"
import Html from "../Assets/htmlcss.jpg"
import js from "../Assets/JavaScript.jpg"
import Version from "../Assets/Version.jpg"
import React from "../Assets/React.jpg"

export default function About(props){
    const [certLinks] = useState({
        intro: "https://www.coursera.org/account/accomplishments/certificate/F1LUQSU42EGP",
        html: "https://www.coursera.org/account/accomplishments/certificate/73054PD2OMBX",
        js: "https://www.coursera.org/account/accomplishments/certificate/YZOU91U14NYF",
        version: "https://www.coursera.org/account/accomplishments/certificate/RUKZX75AZ96D",
        react: "https://www.coursera.org/account/accomplishments/certificate/NNIFIXQ8NDAV"
    })
    return(
        <section id="aboutSec" ref={props.refProp}>
            <div id="aboutText">
                <h1>About Me</h1>
                <h5>I'm a passionate full-stack developer with 2+
                    years of experience building modern web
                    applications. I specialize in JavaScript, React,
                    and creating delightful user experiences.</h5>
            </div>

            <h1>Skills</h1>

            <div id="allSkills">
                <Skills skillName={"HTML"} percent={"90%"}></Skills>
                <Skills skillName={"CSS"} percent={"70%"}></Skills>
                <Skills skillName={"JavaScript"} percent={"95%"}></Skills>
                <Skills skillName={"React"} percent={"60%"}></Skills>
                <Skills skillName={"Verson Control"} percent={"80%"}></Skills>
            </div>

            <h1 ref={props.certRef}>Certificates</h1>
            <div id="allCertiDiv">
                <Certificate img={Intro} name={"IntroduIntroduction to Front-End Developmentction"} src={certLinks.intro}/>
                <Certificate img={Html} name={"HTML and CSS in depth"} src={certLinks.html}/>
                <Certificate img={js} name={"Programming with JavaScript"} src={certLinks.js}/>
                <Certificate img={Version} name={"Version Control"} src={certLinks.version}/>
                <Certificate img={React} name={"React Basics"} src={certLinks.react}/>
            </div>

        </section>

    )
}