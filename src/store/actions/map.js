import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-map';

export const selectRegion = (region) => {
    return {
        type: actionTypes.SELECT_REGION,
        region
    }
}

export const cleareSelectedRegion = () => {
    return {
        type: actionTypes.CLEAR_SELECTED_REGION
    }
}

export const setMapData = (mapData) => {
    return {
        type: actionTypes.SET_MAP_DATA,
        mapData
    }
}

export const fetchMapDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_MAP_DATA_FAILED,
        error
    }
}

export const fetchMapDataStart = () => {
    return {
        type: actionTypes.FETCH_MAP_DATA_START,
    }
}

export const mapInit = () => {
    return dispatch => {
        dispatch(fetchMapDataStart());
        axios.get('/region.json')
            .then(res => {
                const fetchedMapData = [];
                for (let key in res.data) {
                    fetchedMapData.push(res.data[key]);
                }
                dispatch(setMapData(fetchedMapData))
            })
            .catch(err => {
                dispatch(fetchMapDataFailed(err));
            });
    }
}