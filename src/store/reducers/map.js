import * as actionTypes from '../actions/actionTypes';

const initialState = {
    selectedRegion: null,
    hoveringOver: null,
    mapData: [],
    error: null,
    loading: false
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.CLEAR_SELECTED_REGION:
            return {
                ...state,
                selectedRegion: null
            }

        case actionTypes.SELECT_REGION:
            return {
                ...state,
                selectedRegion: action.region
            }

        case actionTypes.SET_MAP_DATA:
            return {
                ...state,
                mapData: action.mapData,
                error: null,
                loading: false
            }

        case actionTypes.FETCH_MAP_DATA_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        case actionTypes.FETCH_MAP_DATA_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.MAP_HOVER:
            return {
                ...state,
                hoveringOver: action.region
            }

        case actionTypes.MAP_HOVER_LEAVE:
            return {
                ...state,
                hoveringOver: null
            }

        default:
            return state;
    }
}

export default mapReducer;