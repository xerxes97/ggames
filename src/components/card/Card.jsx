import styles from './card.module.css'
import img from '../../static/images/notFound.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router'

export default function Card({item}){

    const history = useHistory()

    function handleGoToProducDescription(idGame) {
        history.push(`/game/${idGame}`);
    }

    return(<div onClick={()=>handleGoToProducDescription(item.id)} className={styles.card} key={item.id}>
        <div className={styles.card__infoHeader}>
            <h1 className={styles.title}>{item.name}</h1>
            <span><FontAwesomeIcon className={styles.icon} icon={faStar}/></span> <span>{item.rating}</span>
        </div>
        <img className={styles.img} src={item.background_image || img} alt="" />
    </div>)
}