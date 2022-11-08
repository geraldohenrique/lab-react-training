import './Greetings.css'

function Greetings(props){
    switch (props.lang) {
        case 'de':
            return (
                <div className='greetings boxConteiner'>Hallo {props.children}</div>
            )
        case 'en':
            return (
            <div className='greetings boxConteiner'>Hello {props.children}</div>
        )
        case 'es':
            return (
            <div className='greetings boxConteiner'>Hola {props.children}</div>
        )
        case 'fr':
            return (
            <div className='greetings boxConteiner'>Bonjour {props.children}</div>
        )
        default:
            return (
                <div className='greetings boxConteiner'> "Olá" em idioma não determinado {props.children}</div>
            )
    }
 
}

export default Greetings