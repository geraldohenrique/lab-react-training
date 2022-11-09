import './Rating.css'

function Rating(props){
    let rating = [];
    for (let i = 0; i < Math.round(props.children); i++){
        rating.push('★')
    }
    for (let i=0; i < 5 - Math.round(props.children); i++){
        rating.push('☆')
    }

    return(
        <div className='rating'>{rating}</div>
    )
}

export default Rating