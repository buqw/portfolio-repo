import avatar from "../Assets/Avatar.png"
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Mail } from 'lucide-react';
import { WiSnow } from "react-icons/wi";


export default function Home(props){
    return(
        <section id="homeSec" ref={props.refProp}>
            <div id="homeDiv">

                <div id="homeInfoDiv">
                    <h5 id="role">{props.role}</h5>
                    <h1 id="homeHi">Hi, I'm</h1>
                    <h1 id="homeName">{props.name}</h1>
                    <p>I am a Computer Science student 
                     and full-stack developer passionate 
                     about creating modern and efficent web
                     applications.</p>

                    <div id="homeBtns">
                        <button id="homeViewBtn" onClick={() => props.scrollToSec(props.projRef)}>View My Work</button>
                        <button id="homeContactBtn" onClick={() => props.scrollToSec(props.touchRef)}>Contact Me</button>
                    </div>

                    <div id="homeIconsDiv">
                        <button onClick={()=> window.open("https://github.com/buqw")}>
                            <Github />
                        </button>
                        <button onClick={()=> window.open("https://www.linkedin.com/in/hassan-almisbah-357562368/")}>
                            <Linkedin/>
                        </button>
                        <button>
                            <Twitter onClick={()=> window.open("https://x.com/vqur__?s=21")}/>
                        </button>
                        <button>
                            <Mail onClick={()=> window.open("https://mail.google.com/mail/?view=cm&fs=1&to=hassanalmisbah@gmail.com")}/>
                        </button>


                    </div>
                </div>

                <div id="homeImgDiv">
                    <img src={avatar} alt="" />
                </div>
            </div>
        </section>

    )
}