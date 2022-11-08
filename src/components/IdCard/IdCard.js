import React from 'react'
import './IdCard.css'




function IdCard(props){
    return (
        <div className='idCard boxConteiner'>
            <div className='imgIdCard'>
                <img src={ props.picture } alt=""/>
            </div>
            <div>
                <p><span className='tituloCard'>First name: </span>{props.firstName}</p>
                <p><span className='tituloCard'>Last name: </span>{props.lastName}</p>
                <p><span className='tituloCard'>Gender: </span>{props.gender}</p>
                <p><span className='tituloCard'>Height: </span>{props.height/100}m</p>
                <p><span className='tituloCard'>Birth: </span>{props.birth.toDateString()}</p>
            </div>

            
        </div>
    )
}

export default IdCard