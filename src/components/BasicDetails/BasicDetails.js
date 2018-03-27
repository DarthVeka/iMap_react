import React, { Fragment } from 'react';

import classes from './BasicDetails.css';

const BasicDetails = (props) => {

    // Fetch all coat of arms images 
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../../assets/Images/CoatOfArms', false, /\.(png|jpe?g|svg)$/));
    // -----------------------------

    let region = null;
    if (props.selectedRegion) {
        const id = props.selectedRegion.id.split('-')[1];
        region =
            <Fragment>
                <h1>{props.selectedRegion.regionTitle}</h1>
                <img src={images[`MBZ${id}.png`]} alt={props.selectedRegion.regionTitle} />
            </Fragment>
    }

    return (
        <div className={classes.BasicDetails}>
            {region}
        </div>
    );
};

export default BasicDetails;