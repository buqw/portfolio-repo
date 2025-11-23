import ProjTemp from "./ProjTemp"
import Sharara from "../Assets/ShararaProj.jpg"
import todo from "../Assets/Todo.jpg"

export default function Projects(props){

    return(
        <div id="proSec" ref={props.projRef}>
            <div>
                <h1>Projects</h1>
            </div>

        <div id="allProj">
            <ProjTemp name = {"Sharara Crypto Currencies Wallet"} src={"https://sharara-repo.vercel.app/"} img={Sharara}/>
            <ProjTemp name = {"To Do List"} src={"https://todo-repo-sepia.vercel.app/"} img={todo}/>
        </div>

        </div>
    )
}