import { useState } from 'react'
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import mario from '../../static/images/mario.png'

export default function Navbar(){

    const[search, setSearch] = useState('')

    function handleChange(e){
        setSearch(e.target.value)
    }
    
    return(<div>
        <div className={styles.navbar__user}>
            <div className={styles.logoContainer}>
                <img className={styles.logoGG} src={mario} alt="" />
                <span style={{fontSize:'20px', marginLeft:'5px'}}>GGAMES</span>
            </div>
            <div className={styles.searchBar}>
                <input onChange={handleChange} className={styles.navbar__search} placeholder='¿QUE ESTÁS BUSCANDO? ESCRÍBELO AQUÍ...' type="text" value={search} />
                <FontAwesomeIcon className={styles.icon} icon={faSearch}/>
            </div>
            <div className={styles.item}><span style={{color:'#0071ea', fontWeight:'bold'}}>FAVORITOS</span></div>
            <div className={styles.item}><span style={{fontSize:'15px'}}>HOLA ALIADO</span><br /><span style={{color:'#0071ea', fontSize:'23px', cursor:'pointer'}}>INGRESA</span></div>
            <div className={styles.item}>
            <FontAwesomeIcon style={{color:'#0071ea', fontSize:'23px'}} icon={faShoppingCart}/>
                <span> CARRITO</span>
            </div>
        </div>
    </div>)
}