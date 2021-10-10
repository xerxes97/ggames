import { GET_GAMES, GET_CATEGORIES, GET_CARROUSEL, GET_GENRE_INFO, GET_GAME_INFO } from "../actions/actions";

const initialState={
    games: [],
    gameDetails: {},
    categories: [],
    favorites: [],
    gamesSearch:[],
    carrousel:[],
    infoGenre:[]
}

function rootReducer(state = initialState, action){

    switch(action.type){

        case GET_GAMES:{
            return{
                ...state,
                games: action.payload.data
            }
        }

        case GET_CATEGORIES:{
            return{
                ...state,
                categories: action.payload.data
            }
        }

        case GET_CARROUSEL:{
            let filter = action.payload.data.results.filter(item=>item.background_image!==null)
            return{
                ...state,
                carrousel: filter
            }
        }

        case GET_GENRE_INFO:{
            return{
                ...state,
                infoGenre: action.payload.data
            }
        }

        case GET_GAME_INFO:{
            return{
                ...state,
                gameDetails: action.payload.data
            }
        }
        
        default:
            return state;
    }

}

export default rootReducer;