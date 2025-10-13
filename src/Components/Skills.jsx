import { useRef } from "react"

export default function Skills(props){
    const divRef = useRef(null);
    return(
        <div id="skillDiv">
            <div id="skillNameDiv">
                <p>{props.skillName}</p>
                <p>{props.percent}</p>
            </div>

            <div id="skillFull">
                <div id="skillCurrent" style={{width: `${props.percent}`}} >

                </div>
            </div>

        </div>
    )

}