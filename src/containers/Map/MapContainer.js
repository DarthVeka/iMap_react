import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './MapContainer.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions';
import Tooltip from '../../components/UI/Tooltip/Tooltip';

class MapContainer extends Component {

    state = {
        x: null,
        y: null
    }
    componentDidMount() {
        this.props.onMapInit();
    }

    handleClickOnRegion = (region) => {
        this.props.onSelectRegion(region);
    }

    handleMouseEnter = (title, e) => {
        this.props.onRegionHover(title);
        this.setState({
            x: e.pageX+30,
            y: e.pageY+30
        })
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
                                    className={[classes.Region, this.props.selectedRegion === mda ? classes.Active : null].join(' ')}
                                    onClick={() => this.handleClickOnRegion(mda)}
                                    onMouseEnter={(e) => this.handleMouseEnter(mda.regionTitle, e)}
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
                <Tooltip 
                    show={this.props.hoveringOver !== null}
                    top={this.state.y}
                    left={this.state.x}
                    >{this.props.hoveringOver}</Tooltip>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mapData: state.mapData,
        loading: state.loading,
        selectedRegion: state.selectedRegion,
        hoveringOver: state.hoveringOver
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMapInit: () => dispatch(actions.mapInit()),
        onRegionHover: (region) => dispatch(actions.mapHover(region)),
        onRegionHoverLeave: () => dispatch(actions.mapHoverLeave()),
        onSelectRegion: (region) => dispatch(actions.selectRegionStart(region)),
        onClearSelectedRegion: () => dispatch(actions.cleareSelectedRegion())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);