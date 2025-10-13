import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Mail } from 'lucide-react';

export default function GetTouch(props){

    return(
        <div ref={props.touchRef} id="touchSec">
            <div>
                <h1>Get in Touch</h1>
            </div>

            <div id="touchCont">
                <button onClick={()=> window.open("https://github.com/buqw")}>
                    <Github size={30}/>
                    <p>GitHub</p>
                </button>
                <button onClick={()=> window.open("https://www.linkedin.com/in/hassan-almisbah-357562368/")}>
                    <Linkedin size={30}/>
                    <p>LinkedIn</p>

                </button>
                <button>
                    <Twitter size={30} onClick={() => window.open("https://x.com/vqur__?s=21")}/>
                    <p>X</p>
                </button>
                <button  onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=hassanalmisbah@gmail.com")}>
                    <Mail size={30}/>
                    <p>Email</p>
                </button>
            </div>

        </div>
    )
}