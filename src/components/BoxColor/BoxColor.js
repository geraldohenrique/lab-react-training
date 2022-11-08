import './BoxColor.css'

function BoxColor(props){

    const divStyle = {
        backgroundColor: 'rgb('+ props.r +' '+ props.g + ' ' + props.b +')',
        color: 'white'
    }

    return(

        <div className='boxColor boxConteiner' style={divStyle}>
            <p>rgb({props.r},{props.g} ,{props.b})</p>
            <p>#{props.r.toString(16)}{props.g.toString(16)}{props.b.toString(16)}</p>
        </div>
    )
}

export default BoxColor