import ProjTemp from "./ProjTemp"
import Sharara from "../Assets/ShararaProj.jpg"
import little from "../Assets/littleLemon.jpg"
import Imposter from "../Assets/Imposter.jpg"

export default function Projects(props){

    return(
        <div id="proSec" ref={props.projRef}>
            <div>
                <h1>Projects</h1>
            </div>

        <div id="allProj">
            <ProjTemp name = {"Sharara Crypto Currencies Wallet"} src={"https://sharara-repo.vercel.app/"} img={Sharara}/>
        </div>

        </div>
    )
}