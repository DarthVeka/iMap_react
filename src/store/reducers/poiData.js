import * as actionTypes from '../actions/actionTypes';

const initialState = {
    mapPoiData: null,
    error: null,
    loading: false,
    googleMap: null
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_MAP_POI_DATA_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.SET_MAP_POI_DATA:
            return {
                ...state,
                mapPoiData: action.poiData,
                error: null,
                loading: false
            }

        case actionTypes.FETCH_MAP_POI_DATA_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        default:
            return state;
    }
}

export default mapReducer;