import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './MapContainer.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions';

class MapContainer extends Component {

    componentDidMount() {
        this.props.onMapInit();
    }

    handleClickOnRegion = (e) => {
        console.log(e.target)
    }

    handleMouseEnter = (title) => {
        this.props.onRegionHover(title);
    }

    render() {
        let displayMap = <Spinner />;

        if (!this.props.loading) {
            displayMap = (
                <svg 
                    className={classes.Map} 
                    viewBox="0 0 610 610"
                    version="1.1"
                >
                    <g>
                        {
                            this.props.mapData.map(mda => (
                                <path
                                    key={mda.id}
                                    id={mda.id}
                                    title={mda.regionTitle}
                                    d={mda.d}
                                    className={classes.Region}
                                    onClick={this.handleClickOnRegion}
                                    onMouseEnter={() => this.handleMouseEnter(mda.regionTitle)}
                                    onMouseLeave={this.props.onRegionHoverLeave}
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

const mapStateToProps = (state) => {
    return {
        mapData: state.mapData,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMapInit: () => dispatch(actions.mapInit()),
        onRegionHover: (region) => dispatch(actions.mapHover(region)),
        onRegionHoverLeave: () => dispatch(actions.mapHoverLeave())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);