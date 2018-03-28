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
                <div className={classes.MainContainer}>
                    <img className={classes.Image} src={images[`MBZ${id}.png`]} alt={props.selectedRegion.regionTitle} />
                    <div className={classes.SubContainer}>
                        <p><strong>Area:</strong> {props.selectedRegion.area.toLocaleString(undefined, { minimumFractionDigits: 2 })} km²</p>
                        <p><strong>Population:</strong> {props.selectedRegion.population.toLocaleString(undefined, { minimumFractionDigits: 0 })}</p>
                        <p><strong>Link:</strong> <a href={props.selectedRegion.link}>{props.selectedRegion.regionTitle}</a></p>
                    </div>
                </div>
                <button className={classes.Button}>DETAILS</button>
            </Fragment>
    }

    return (
        <div className={classes.BasicDetails}>
            {region}
        </div>
    );
};

export default BasicDetails;