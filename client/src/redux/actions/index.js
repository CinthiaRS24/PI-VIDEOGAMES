import axios from "axios";

export function getVideogames() {
    return function(dispatch) {
        axios.get("http://localhost:3001/videogames")
            .then(response => {
                return dispatch({
                    type: 'GET_VIDEOGAMES',
                    payload: response.data
                })
            })
    }
}


export function getVideogamesByName(payload) {
    return function(dispatch) {
        axios.get(`http://localhost:3001/videogames?name=${payload}`)
            .then(response => {
                return dispatch({
                    type: 'GET_NAME_VIDEOGAMES',
                    payload: response.data
                })
            })
    }
}


export function getVideogameById(payload) {
    return function(dispatch) {
        axios.get(`http://localhost:3001/videogame/${payload}`)
            .then(response => {
                return dispatch({
                    type: 'GET_ID_VIDEOGAME',
                    payload: response.data
                })
            })
    }
}


export function clearVideogame() {
    return function(dispatch) {
        return dispatch({
            type: 'GET_ID_VIDEOGAME',
            payload: []
        })
    }
}


export function postVideogames(payload) {
    return function() {
        axios.post("http://localhost:3001/videogames", payload)
            .then(response => {
                return response
            })
    }
}


export const deleteVideogame = (id) => {
    return function() {
        axios.get(`http://localhost:3001/videogames/${id}`)
            .then(response => {
                return response
            })
    }  
}


export function getGenres() {
    return function(dispatch) {
        axios.get("http://localhost:3001/genres")
            .then(response => {
                return dispatch({
                    type: 'GET_GENRES',
                    payload: response.data
                })
            })
    }
}


export function filterByGenres(payload) {
    return {
        type: 'FILTER_BY_GENRES',
        payload
    }
}


export function filterByCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}


export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}


export function orderByRating(payload) {
    return {
        type: 'ORDER_BY_RATING',
        payload
    }
}
