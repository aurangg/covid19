import React from 'react';
import WorldDateTime from './worldDateTime';
import WorldAllStats from './worldAllStats';
import './worldstats.css';


const WorldStats = (props) => {
    const {world, worldDate, worldTime} = props.worldProps;
    let worldStatsProps = {world}
    let dateTimeProps = {worldDate, worldTime};

    return(
        <div className="container">
            <div className="world_stats">
                <WorldDateTime dateTimeProps={dateTimeProps} />
                <WorldAllStats worldStatsProps = {worldStatsProps} />
            </div>
        </div>
    )
}

export default WorldStats;


