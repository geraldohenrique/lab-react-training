import './ClickablePicture.css'
import image1 from  '../../assets/images/click-picture1.jpeg'
import image2 from  '../../assets/images/click-picture1-mito.jpg'
import { useState } from 'react'


function ClickablePicture(){

    const [show1,setShow1] = useState(true)
    const [show2,setShow2] = useState(false)

    const trocaImg = () =>  {
        setShow1(!show1)
        setShow2(!show2)
    }

 
    return (
        <div >
            {show1 && <img src={image1} className="imgMito" alt=""  onClick={trocaImg}/> }
            {show2 && <img src={image2} className="imgMito" alt=""  onClick={trocaImg}/> }
        </div>
    )
}

export default ClickablePicture