


function LikeButton({addLike, countLike, newStyle}){

    const divStyle1 = {
        margin: '2rem',
        border: 'none',
        padding: '10px',
        width: '5rem',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: newStyle[0]
    }

    const divStyle2 = {
        border: 'none',
        padding: '10px',
        width: '5rem',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: newStyle[1]
    }

    
    
    
    return(
        <div>
            <button type="button" className="like-button" style={divStyle1}  onClick={() => addLike(0)}>{countLike[0]} Likes</button>
            <button type="button" className="like-button" style={divStyle2}  onClick={() => addLike(1)}>{countLike[1]} Likes</button>
        </div>
    )
}

export default LikeButton