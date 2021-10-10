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
            <li className={styles.itemTitle}>Explora por categoria</li>
            {
                state.results && state.results.map(category => <Link key={category.id} to={`/games/${category.name}`}><li className={styles.itemSelect} >{category.name}</li></Link>)
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