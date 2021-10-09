import { GET_GAMES, GET_CATEGORIES, GET_CARROUSEL } from "../actions/actions";

const initialState={
    games: [],
    gameDetails: {},
    categories: [],
    favorites: [],
    gamesSearch:[],
    carrousel:[]
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
        
        default:
            return state;
    }

}

export default rootReducer;