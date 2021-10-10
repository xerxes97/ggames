import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router"
import { getDetailsGame } from "../../actions/actions";
import styles from './details.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'  

function Details({state, getDetailsGame}){

    const {id} = useParams();

    useEffect(()=>{
        getDetailsGame(id)
    },[id])

    console.log(state)
    return(<div className={styles.details}>
        <h1>{state.name}</h1>
        <span><FontAwesomeIcon className={styles.icon} icon={faStar}/></span><span>{state.rating}</span>
        <img src={state.background_image} alt="" />
        <span>Genres: {state.genres && state.genres.map(genre=>genre.name).join(', ')}</span>
        <p>{state.description_raw}</p>
        <span>Oficial site: <a className={styles.link} href={state.website} target='_blank' rel='noreferrer'>{state.website}</a> </span>
    </div>)
}

function mapStateToProps(state){
    return{
        state: state.gameDetails
    }
}

export default  connect(mapStateToProps, {getDetailsGame})(Details)