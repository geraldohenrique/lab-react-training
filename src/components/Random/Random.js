import './Random.csv'

function Random(props){
    return(
        <div className='boxConteiner'>Random value between {props.min} e {props.max} =&gt; {Math.floor(Math.random() * props.max) + props.min}</div>
    )
}

export default Random