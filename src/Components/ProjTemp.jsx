export default function ProjTemp(props){

    return(
        <div id='projDiv' onClick={ () => window.open(props.src)}>

            <p>
                {props.name}
            </p>

        </div>
    )
}