import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './MapContainer.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions';

class MapContainer extends Component {

    
    componentWillMount() {
        document.addEventListener("keydown", (e) => this.handleKeyDown(e));
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", (e) => this.handleKeyDown(e));
    }    

    componentDidMount() {
        this.props.onMapInit();
    }

    handleKeyDown = (e) => {
        const ESCAPE_KEY = 27;

        if(e.keyCode === ESCAPE_KEY) {
            this.props.onClearSelectedRegion();
            console.log('eskejp')
        }
    }

    handleClickOnRegion = (region) => {
        this.props.onSelectRegion(region);
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
                                    className={[classes.Region, this.props.selectedRegion === mda ? classes.Active : null].join(' ') }
                                    onClick={() => this.handleClickOnRegion(mda)}
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
        loading: state.loading,
        selectedRegion: state.selectedRegion
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMapInit: () => dispatch(actions.mapInit()),
        onRegionHover: (region) => dispatch(actions.mapHover(region)),
        onRegionHoverLeave: () => dispatch(actions.mapHoverLeave()),
        onSelectRegion: (region) => dispatch(actions.selectRegion(region)),
        onClearSelectedRegion: () => dispatch(actions.cleareSelectedRegion())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);