import React from 'react';

const Deaths = (props) => {
    const {newcases, prevDaysDeath} = props.deathProps;

    function calcaulateDeathFunction(newD, totalD, prevD){
        if(0 < prevD)
        {
            return(
                <h4 id="figures" className="red">
                    +{newD}
                </h4>
            )
        }
        else{
            return(
                <h4 id="figures">
                    0
                </h4>
            )
        }
    }
    return(
        <div className="new_cases">
            {newcases.latest_stat_by_country.map((d) => (
                <div key={d.id}>
                <div className="new_cases_title" style={{
                        background: 'rgb(213,21,38)'
                }}>
                    <h1>
                        Total Deaths
                    </h1>
                </div>
                <div className="spacing">
                <div className="row row_class">
                    <div className="col-6">
                        <h4 id="days">
                            Today:
                        </h4>
                    </div>
                    <div className="col-6">
                        {calcaulateDeathFunction(d.new_deaths,d.total_deaths, prevDaysDeath)}
                    </div>
                </div>
                <div className="row row_class">
                    <div className="col-6">
                        <h4 id="days">
                            Yesterday:
                        </h4>
                    </div>
                    <div className="col-6">
                        <h4 id="figures" style={{color:'red'}}>
                            {prevDaysDeath}
                        </h4>
                    </div>
                </div>
                <div className="row row_class">
                    <div className="col-6">
                        <h4 id="days">
                            Total:
                        </h4>
                    </div>
                    <div className="col-6">
                        <h4 id="figures">
                            {d.total_deaths}
                        </h4>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Deaths;