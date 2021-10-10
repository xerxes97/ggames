import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getGames, getGenreDeatils } from "../../actions/actions";
import Card from "../../components/card/Card";
import styles from './games.module.css'

function Games({state, genreInfo, getGames, getGenreDeatils}){

    const {option} = useParams();
    console.log(genreInfo)

    const [games, setGames] = useState(false)

    useEffect(()=>{
        getGames('',8,option,'');
        getGenreDeatils(option);
        setGames(true)
    },[option])

    return(<div  className={styles.pag}>


    <div className={styles.games}>
        <h1>{option}</h1>
        <div className={styles.cardsContainer}>
    {
        !games? <h1>prueba</h1>:
        state.results && state.results.map(item=><Card key={item.id} item={item}/>)
    }
        </div>

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
        state: state.games,
        genreInfo: state.infoGenre
    }
}

export default connect(mapStateToProps, {getGames, getGenreDeatils})(Games)