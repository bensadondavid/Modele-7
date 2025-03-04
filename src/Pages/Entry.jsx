import CountDown from '../Components/CountDown'
import { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

function Entry(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="entry">
            <p className="bsd">בס"ד</p>
            <div className="arche-entry">
                <img src="logo-m7.png" className='logo-entry' />
                <p className='entry-name-1'>Judith</p>
                <p className='entry-and'>&</p>
                <p className='entry-name-2'>Dan David</p>
                <p className='entry-date'>03 . 06 . 2024</p>
                <CountDown />
                <Link to='/home' className='invit-link'>Voir l'invitation</Link>
                <img src="fleurs-entry-bas.png" className='fleurs-entry-bas' />
            </div>
        </div>

    )
}

export default Entry