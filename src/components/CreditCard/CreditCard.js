import './CreditCard.css'
import visaImg from '../../assets/images/visa.png'
import IconMaster from '../../assets/images/IconMaster/IconMaster'

function CreditCard(props){
    let mes2d = [props.expirationMonth];
    const divStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    if(props.expirationMonth < 10){
        mes2d.unshift(0)
        mes2d.join();
    }


    if (props.type === "Visa") {
        return(
            <div className='credit-card' style={divStyle}>
                <div className='logo'><img src={visaImg} alt="logo"/></div>
                <div className='card-num'><p>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; {props.number.substr(12,4)}</p></div>
                <div className='outros-card'><p>Expires {mes2d}/{props.expirationYear.toString().substr(2,2)} &nbsp; &nbsp; &nbsp; {props.bank}</p></div>
                <div className='outros-card'>{props.owner}</div>
            </div>
    )} 
    return(
        <div className='credit-card' style={divStyle}>
            <div className='logo'><IconMaster/></div>
            <div className='card-num'><p>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; {props.number.substr(12,4)}</p></div>
            <div className='outros-card'><p>Expires {mes2d}/{props.expirationYear.toString().substr(2,2)} &nbsp; &nbsp; &nbsp;  {props.bank}</p></div>
            <div className='outros-card'>{props.owner}</div>
        </div>
    )

}

export default CreditCard