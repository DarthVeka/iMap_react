import React, { Component } from 'react';

import axios from '../../axios/axios-map';
import classes from './Map.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class Map extends Component {
    state = {
        mapData: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/region.json')
            .then(res => {
                console.log(res.data)
                const fetchedMapData = [];
                for (let key in res.data) {
                    fetchedMapData.push(res.data[key]);
                }
                this.setState({
                    mapData: fetchedMapData,
                    loading: false
                });
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    loading: false
                });
            });
    }

    handleClickOnRegion = (e) => {
        console.log(e.target)
    }

    render() {
        let displayMap = <Spinner />;

        if (!this.state.loading) {
            displayMap = (
                <svg 
                    className={classes.Map} 
                    viewBox="0 0 620 620"
                    version="1.1"
                >
                    <g>
                        {
                            this.state.mapData.map(mda => (
                                <path
                                    key={mda.id}
                                    id={mda.id}
                                    region-title={mda.regionTitle}
                                    d={mda.d}
                                    className={classes.Region}
                                    onClick={this.handleClickOnRegion}
                                />
                            ))
                        }
                    </g>
                </svg>
            )
        }

        return (
            <React.Fragment>
                {displayMap}
            </React.Fragment>
        );
    }
}

export default Map;