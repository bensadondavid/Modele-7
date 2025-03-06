import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Mairie(){

    const { language } = useContext(Context)

    return(

        <div className="arche">
            <div className="arche-card">
                <img src="logo-mairie.png" className='arche-logo' />
                <h1 className='mairie-title'>La ceremonie civile</h1>
                <p className='mairie-noms'>Judith <br />& <br />Dan David</p>
                <p className='mairie-text'>Se diront</p>
                <h2 className='mairie-oui'>"Oui"</h2>
                <p className='mairie-date'> <strong>Le dimanche 3 juin 2O24 <br /> A 12h00</strong></p>
                <p className='mairie-endroit'>A la mairie de Saint Brice sous foret <br />95350</p>
                <p className='mairie-suite'>A issue de la cérémonie, un vin d'honneur seras servi sur place </p>
                <Waze name={'waze'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#A34444' />
                <SaveTheDate name={'save-the-date'} date={[2024, 6, 3, 12, 0]} iconColor='#A34444' iconHeight='18px' iconWidth='21px'/>
                <img src="fleurs-entry-bas.png" className='fleurs-entry-bas' />
            </div>
        </div>

    )
}

export default Mairie