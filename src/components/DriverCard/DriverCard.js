import './DriverCard.css'
import Rating from '../Rating/Rating'

function DriveCard(props){
    return(
        <div className='driver-card-div'>
            <div className='driver-card'>
                <div className='div-img-driver'><img src={props.img} className="img-driver" alt="" /></div>
                <div className='dados-card-driver'>
                    <div className='dados-driver'>
                        <p>{props.name}</p>
                        <p className='div-rating'><Rating>{props.rating}</Rating></p>
                        <p className='model-plate'>{props.car.model} - {props.car.licensePlate}</p>
                    </div>
                </div>               
            </div>
        </div>
    )
}

export default DriveCard