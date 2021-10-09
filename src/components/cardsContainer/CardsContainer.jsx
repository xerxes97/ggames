import { useEffect } from "react";
import { connect } from "react-redux";
import { getGames } from "../../actions/actions"
import Carrousel from "../carrousel/Carrousel";
import Categories from "../categories/Categories";
import styles from './cardsContainer.module.css'
import aogIV from '../../static/videos/aogIV.mp4'
import dt from '../../static/videos/dT.mp4'
import RE from '../../static/videos/RE.mp4'
import out from '../../static/videos/out.mp4'
import poster1 from '../../static/images/aogIV.jpg'
import poster2 from '../../static/images/out.jpg'
import poster3 from '../../static/images/prueba.jpg'
import poster4 from '../../static/images/RE.jpg'


function CardsContainer({state, getGames}){

    useEffect(()=>{
        getGames('', 3);
    },[getGames])

    return(<div>
        <div className={styles.info}>

            <Categories/>
            <Carrousel/>

        </div>
        <div className={styles.gallery}>
            <div>
                <span>Best Sellers</span>
            </div>
            <div className={styles.videoGallery}>
                <div className={styles.video}>
                    <video controls loop src={aogIV} poster={poster1} muted></video>
                </div>
                <div className={styles.video}>
                    <video controls loop src={dt} poster={poster3} muted></video>
                </div>
                <div className={styles.video}>
                    <video controls loop src={out} poster={poster2} muted></video>
                </div>
                <div className={styles.video}>
                    <video controls loop src={RE} poster={poster4} muted></video>
                </div>
            </div>
        </div>

    </div>)
}

function mapStateToProps(state){
    return{
        state: state.games
    }
}

export default connect(mapStateToProps, {getGames})(CardsContainer)