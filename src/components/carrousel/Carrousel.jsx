import { useEffect } from "react"
import { connect } from "react-redux"
import { getDataOrg } from "../../actions/actions"
import styles from './carrousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Carrousel({state, getDataOrg}){
    console.log(state)

    useEffect(()=>{
        getDataOrg('rating', '10')
    },[getDataOrg])
    return(<div className={styles.slider}>
        <h1 className={styles.text}>recommended by the community</h1>
        <Carousel autoPlay={true} stopOnHover={true} dynamicHeight={true} interval={3000} infiniteLoop={true} >
            {
                state && state.map(item=> <div key={item.id}>
                    <img className={styles.slide} src={item.background_image} alt="" />
                </div>)
            }
        </Carousel>
        </div>)
}

function mapStateToProps(state){
    return{
        state: state.carrousel
    }
}

export default connect(mapStateToProps, {getDataOrg})(Carrousel)