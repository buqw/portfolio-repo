export default function Nav(props){

    return(
        <nav>
            <div>
                <h2>HM</h2>
            </div>

            <div id="navBtnsDiv">
                <button className="navBtns" onClick={()=> props.scrollToSec(props.homeRef)}>Home</button>
                <button className="navBtns" onClick={ () => props.scrollToSec(props.aboutRef)}>About</button>
                <button className="navBtns" onClick={() => props.scrollToSec(props.certRef)}>Certificates</button>
                <button className="navBtns" onClick={() => props.scrollToSec(props.projRef)}>Projects</button>
            </div>

            <div>
                <button id="getTouch" onClick={()=> props.scrollToSec(props.touchRef)}>Get in Touch</button>
            </div>


        </nav>

    )
}
