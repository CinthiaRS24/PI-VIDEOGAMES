const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    detail: []
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload 
            }

        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }
            
        case 'FILTER_BY_GENRES':
            const allVideogames = state.allVideogames;
            const filteredGenre = action.payload === 'All'? allVideogames : allVideogames.filter(v => v.genres?.find(v => v === action.payload));
            return {
                ...state,
                videogames: filteredGenre
            }
        
        case 'FILTER_CREATED':
            const allVideogames2 = state.allVideogames;
            const filteredCreation = action.payload === 'Created' ? allVideogames2.filter(el => el.createdInDb) : allVideogames2.filter(el => !el.createdInDb);

            return {
                ...state,
                videogames: action.payload === 'All' ? allVideogames2 : filteredCreation
            }
        
        
        case 'ORDER_BY_NAME':
            let orderAsc = state.videogames.slice().sort((a, b) => {
                let videogameA = a.name.toLowerCase();
                let videogameB = b.name.toLowerCase();

                if(videogameA > videogameB) return 1;

                if(videogameB > videogameA) return -1;

                return 0;
            })

            const allVideogames3 = state.allVideogames;
            const orderName = action.payload === 'asc' ? orderAsc : orderAsc.reverse();

            return {
                ...state,
                videogames: action.payload === '' ? allVideogames3 : orderName
            }
    
        case 'ORDER_BY_RATING':
            let orderRatingAsc = state.videogames.slice().sort((a, b) => {

                if(Number(a.rating) > Number(b.rating)) return 1;

                if(Number(b.rating) > Number(a.rating)) return -1;

                return 0;
            })

            return {
                ...state,
                videogames: action.payload === 'asc' ? orderRatingAsc : orderRatingAsc.reverse()
            }

        case 'GET_NAME_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload
            }

        case 'GET_ID_VIDEOGAME':
            return {
                ...state,
                detail: action.payload
            }


        default:
            return state;
    }

}

export default rootReducer;