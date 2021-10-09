import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getCategories } from "../../actions/actions"
import styles from './categories.module.css'

function Categories({state, getCategories}){

    useEffect(()=>{
        getCategories()
    },[getCategories])

    return(<div className={styles.categories}>
        <ul className={styles.list}>
            <Link to={'/games'}><li className={styles.item}>Descubre</li></Link>
            <li className={styles.item}>Explora por categoria</li>
            {
                state.results && state.results.map(category => <li className={styles.itemSelect} key={category.id}>{category.name}</li>)
            }

        </ul>
    </div>)
}

function mapStateToProps(state){
    return{
        state: state.categories
    }
}

export default connect(mapStateToProps, {getCategories})(Categories)