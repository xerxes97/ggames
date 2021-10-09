import axios from "axios"

export const GET_GAMES = 'GET_GAMES'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CARROUSEL = 'GET_CARROUSEL'

export const getGames = (search, limit)=>{
    return async function(dispatch){
        var games = await axios.get(`https://rawg.io/api/games?key=6a95d760d2c846f29b6b53e127abfd79&search=${search || ''}&page_size=${limit || '8'}`)
        return dispatch({
            type: GET_GAMES,
            payload: games
        })
    }
}

export const getCategories = ()=>{
    return async function(dispatch){
        var categories = await axios.get(`https://rawg.io/api/genres?key=6a95d760d2c846f29b6b53e127abfd79`)
        return dispatch({
            type: GET_CATEGORIES,
            payload: categories
        })
    }
}

export const getDataOrg = (org, limit)=>{
    return async function(dispatch){
        var categories = await axios.get(`https://rawg.io/api/games?key=6a95d760d2c846f29b6b53e127abfd79&ordering=-${org}&page_size=${limit}`)
        return dispatch({
            type: GET_CARROUSEL,
            payload: categories
        })
    }
}