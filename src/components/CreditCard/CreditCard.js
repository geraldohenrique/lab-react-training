import './CreditCard.css'
import visaImg from '../../assets/images/visa.png'
import IconMaster from '../../assets/images/IconMaster/IconMaster'

function CreditCard(props){

    const divStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }


    if (props.type === "Visa") {
        return(
            <div className='credit-card' style={divStyle}>
                <div className='logo'><img src={visaImg} alt="logo"/></div>
                <div className='card-num'><p>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; {props.number.substr(12,4)}</p></div>
                <div className='outros-card'><p>Expires {props.expirationMonth}/{props.expirationYear.toString().substr(2,2)} {props.bank}</p></div>
                <div className='outros-card'>{props.owner}</div>
            </div>
    )} 
    return(
        <div className='credit-card' style={divStyle}>
            <div className='logo'><IconMaster/></div>
            <div className='card-num'><p>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; {props.number.substr(12,4)}</p></div>
            <div className='outros-card'><p>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</p></div>
            <div className='outros-card'>{props.owner}</div>
        </div>
    )

}

export default CreditCard