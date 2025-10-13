export default function Certificate(props){

    return(
        <div id="certDiv" onClick={() => {
            window.open(props.src)
        }}>
            <img src={props.img} alt="" />

            <div id="certName">
                <p>{props.name}</p>
            </div>

        </div>
    )
}