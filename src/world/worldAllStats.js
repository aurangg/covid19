import React from 'react';

const WorldAllStats = (props) => {
    const {world} = props.worldStatsProps;
    let numenator = parseFloat(world.total_recovered.replace(/,/g, ''))
    let dnumenator = parseFloat(world.total_deaths.replace(/,/g, ''))
    let denominator = parseFloat(world.total_cases.replace(/,/g, ''))
    let recoveryPercentage = numenator/denominator * 100;
    let deathPercentage = dnumenator/denominator * 100;
    let activeCases = denominator - dnumenator - numenator
     return(
        <div className="allstats">
            <div className="row">
                <div className="col-6">
                    <h2 className="right">
                        Total Cases:
                    </h2>
                </div>
                <div className="col-6">
                    <h2 className="left">
                        <b>{world.total_cases}</b>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2 className="right">
                        Total Recovered:
                    </h2>
                </div>
                <div className="col-6">
                    <h2 className="left" style={{color:'#1db87d'}}>
                        <b>{world.total_recovered}</b>
                        <span>
                            {recoveryPercentage.toFixed(2)}%
                        </span>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2 className="right">
                        Total Deaths:
                    </h2>
                </div>
                <div className="col-6">
                    <h2 className="left" style={{color:'#c02f24'}}>
                        <b>{world.total_deaths}</b>
                        <span>
                            {deathPercentage.toFixed(2)}%
                        </span>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2 className="right">
                        Active Cases:
                    </h2>
                </div>
                <div className="col-6">
                    <h2 className="left">
                        <b>
                            {activeCases.toLocaleString()}
                        </b>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2 className="right">
                    New Cases:
                    </h2>
                </div>
                <div className="col-6">
                    <h2 className="left">
                        <b>{world.new_cases}</b>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2 className="right">
                    New Deaths:
                    </h2>
                </div>
                <div className="col-6">
                    <h2 className="left">
                        <b>{world.new_deaths}</b>
                    </h2>
                </div>
            </div>
        </div>
     )
}

export default WorldAllStats;