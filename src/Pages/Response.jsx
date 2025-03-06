import { useContext } from 'react'
import { Context } from '../Context'
import Form from '../Components/Form'

function Response(){

    const { language } = useContext(Context)

    return(

        <div className="arche">
            <div className="arche-card">
            <p className="response-title">La Réponse</p>
            <p className='reponse-souhaite'>Réponse souhaitée dès réception</p>
            <Form />
            <img src="logo-m7.png" className='logo-entry' />
            <img src="fleurs-entry-bas.png" className='fleurs-entry-bas' />
            </div>
        </div>

    )
}

export default Response