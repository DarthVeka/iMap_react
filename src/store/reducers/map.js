import * as actionTypes from '../actions/actionTypes';

const initialState = {
    selectedRegion: null,
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

        default:
            return state;
    }
}

export default mapReducer;