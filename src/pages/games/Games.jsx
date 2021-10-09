import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getGames } from "../../actions/actions";
import Card from "../../components/card/Card";
import styles from './games.module.css'

function Games({state, getGames}){

    const {option} = useParams();
    console.log(option)

    const [games, setGames] = useState(false)

    useEffect(()=>{
        getGames();
        setGames(true)
    },[getGames])

    return(<div>

    <div className={styles.cardsContainer}>

    {
        !games? <h1>prueba</h1>:
        state.results && state.results.map(item=><Card item={item}/>)
        
    }

    </div>
        <ReactPaginate
        previousLabel={<FontAwesomeIcon icon={faChevronLeft}/>}
        nextLabel={<FontAwesomeIcon icon={faChevronRight}/>}
        pageCount={100}
        // onPageChange={changePage}
        activeClassName={'activePaginationBtn'}
        />
    </div>)
}

function mapStateToProps(state){
    return{
        state: state.games
    }
}

export default connect(mapStateToProps, {getGames})(Games)