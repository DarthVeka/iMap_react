import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-map';

export const fetchMapPoiDataStart = () => {
    return {
        type: actionTypes.FETCH_MAP_POI_DATA_START
    }
}

export const setMapPoiData = (poiData) => {
    return {
        type: actionTypes.SET_MAP_POI_DATA,
        poiData
    }
}

export const fetchMapPoiDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_MAP_POI_DATA_FAILED,
        error
    }
}

export const startFetchingPoiData = (id) => {
    return (dispatch) => {
        dispatch(fetchMapPoiDataStart());
        const queryParams = `?orderBy="id"&equalTo="${id}"`;
        axios.get('/mapData.json' + queryParams)
            .then(res => {
                const fetchedMapData = [];
                for (let key in res.data) {
                    fetchedMapData.push(res.data[key]);
                }
                dispatch(setMapPoiData(fetchedMapData[0]))
            })
            .catch(err => {
                dispatch(fetchMapPoiDataFailed(err));
            });
    }
}