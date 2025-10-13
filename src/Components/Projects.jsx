import ProjTemp from "./ProjTemp"

export default function Projects(props){

    return(
        <div id="proSec" ref={props.projRef}>
            <div>
                <h1>Projects</h1>
            </div>

        <div id="allProj">
            <ProjTemp name = {"Sharara Crypto Currencies Wallet"} src={"https://sharara-repo.vercel.app/"}/>
        </div>

        </div>
    )
}