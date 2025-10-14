import { ExternalLink } from 'lucide-react';

export default function ProjTemp(props){

    return(
        <div id='projDiv' onClick={ () => window.open(props.src)}>
            <div id="projImgDiv">


                <img src={props.img} alt="" />
            </div>

            <div id='projName'>
                <p>
                    {props.name}
                </p>
            </div>


        </div>
    )
}