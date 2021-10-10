import { useState } from 'react'
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import mario from '../../static/images/mario.png'
import { Link } from 'react-router-dom'

export default function Navbar(){

    const[search, setSearch] = useState('')

    function handleChange(e){
        setSearch(e.target.value)
    }

    function randomColor(){
        var g1=document.getElementById('randomColor');
        var g2=document.getElementById('randomColorx');
        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
        var color2 = '#'+Math.floor(Math.random()*16777215).toString(16);
        g1.style.color=color
        g2.style.color=color2
    }
    
    return(<div>
        <div className={styles.navbar__user}>
            <div className={styles.logoContainer}>
                <Link to ={'/'}>
                    <div onMouseOver={randomColor} className={styles.logo__home}>
                        <img className={styles.logoGG} src={mario} alt="" />
                        <span id='randomColor' style={{fontWeight:'bold' ,fontSize:'38px', marginLeft:'5px', color:'white', zIndex:'1'}}>G</span><span  id='randomColorx' style={{marginLeft: '-17px',fontSize:'30px', color:'white'}}>G</span><span style={{color:'white'}}>AMES</span>
                    </div>
                </Link>
            </div>
            <div className={styles.searchBar}>
                <input onChange={handleChange} className={styles.navbar__search} placeholder='What do you search?' type="text" value={search} />
                <FontAwesomeIcon className={styles.icon} icon={faSearch}/>
            </div>
            <div className={styles.item}>
                <span>ABOUT US</span>
            </div>
            <div className={styles.item}><span>NEWSLETTER</span></div>
            <div className={styles.item}><span>FAVORITES</span></div>
            <div className={styles.item}><span style={{fontSize:'15px'}}>HI GAMER!</span><br /><span style={{color:'#0071ea', fontSize:'23px', cursor:'pointer'}}>JOIN US</span></div>
        </div>
    </div>)
}