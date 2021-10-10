import axios from "axios"

export const GET_GAMES = 'GET_GAMES'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CARROUSEL = 'GET_CARROUSEL'
export const GET_GENRE_INFO = 'GET_GENRE_INFO'
export const GET_GAME_INFO = 'GET_GAME_INFO'
const control = [
    'action',
    'indie',
    'adventure',
    'rpg',
    'strategy',
    'shooter',
    'casual',
    'simulation',
    'puzzle',
    'arcade',
    'platformer',
    'racing',
    'massively multiplayer',
    'sports',
    'fighting',
    'family',
    'board games',
    'educational',
    'card']

export const getGames = (search, limit, genre, page)=>{

    let link='';
    let x = genre && genre.toLowerCase();
     let prueba = control.includes(x)
     console.log(prueba)
    if(prueba){
    link = `https://rawg.io/api/games?key=6a95d760d2c846f29b6b53e127abfd79&search=${search || ''}&page_size=${limit || '8'}&page=${page || '1'}&genres=${x}`
    } else{
    link = `https://rawg.io/api/games?key=6a95d760d2c846f29b6b53e127abfd79&search=${search || ''}&page_size=${limit || '8'}&page=${page || '1'}`

    }
    return async function(dispatch){
        var games = await axios.get(link)
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

export const getGenreDeatils = (genre)=>{
    return async function(dispatch){
        var genreInfo = await axios.get(`https://rawg.io/api/genres/${genre}?key=6a95d760d2c846f29b6b53e127abfd79`)
        return dispatch({
            type: GET_GENRE_INFO,
            payload: genreInfo
        })
    }
}

export const getDetailsGame = (id)=>{
    return async function(dispatch){
        var gameInfo = await axios.get(`https://rawg.io/api/games/${id}?key=6a95d760d2c846f29b6b53e127abfd79`)
        return dispatch({
            type: GET_GAME_INFO,
            payload: gameInfo
        })
    }
}