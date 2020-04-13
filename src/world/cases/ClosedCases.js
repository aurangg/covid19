import React from 'react';
import './middlecases.css';

const ClosedCases = (props) => {
    const {world} = props.closedCasesProps
    let recovered = parseFloat(world.total_recovered.replace(/,/g, ''))
    let deaths = parseFloat(world.total_deaths.replace(/,/g, ''))
    //let closed = parseFloat(world.total_cases.replace(/,/g, ''))
    let totalClosed = recovered + deaths
    let recoveryPercentage = recovered/totalClosed * 100;
    let deathPercentage = deaths/totalClosed * 100;
    return(
        <div className="middle_cases">
            <div className="bg_headings">
                <h2>
                    Closed Cases
                </h2>
            </div>
            <div className="cases_data">
                <h3>
                    {totalClosed.toLocaleString()}
                </h3>
                <h6>
                    Closed cases that have:
                </h6>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="headings">
                        <h2>
                            Recovered:
                        </h2>
                    </div>
                    
                    <div className="cases_data" style={{padding:'5px 0px'}}>
                        <h3 style={{color:'#1db87d'}}>
                            {world.total_recovered}
                            <span id="spanID">
                                <h6 style={{color:'#1db87d'}}>
                                    ({recoveryPercentage.toFixed(2)}%)
                                </h6>
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="col-6">
                    <div className="headings">
                        <h2>
                            Deaths:
                        </h2>
                    </div>
                    
                    <div className="cases_data" style={{padding:'5px 0px'}}>
                        <h3  style={{color:'#c02f24'}}>
                            {world.total_deaths}
                            <span id="spanID">
                                <h6 style={{color:'#c02f24'}}>
                                    ({deathPercentage.toFixed(2)}%)
                                </h6>
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClosedCases;