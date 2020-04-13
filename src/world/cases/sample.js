import React from 'react';

const ActiveCases = () => {
    return(
        <div className="middle_cases">
        <div className="bg_headings">
            <h2>
                Active Cases
            </h2>
        </div>
        <div className="cases_data">
            <h3>
                {totalClosed.toLocaleString()}
            </h3>
            <h6>
                Currently Infected:
            </h6>
        </div>
        <div className="row">
            <div className="col-6">
                <div className="headings">
                    <h2>
                        Mild Condition:
                    </h2>
                </div>
                
                <div className="cases_data" style={{padding:'5px 0px'}}>
                    <h3 style={{color:'#0371EA'}}>
                        {world.total_recovered}
                        <span id="spanID">
                            <h6 style={{color:'#0371EA'}}>
                                ({recoveryPercentage.toFixed(2)}%)
                            </h6>
                        </span>
                    </h3>
                </div>
            </div>
            <div className="col-6">
                <div className="headings">
                    <h2>
                        Critical Condition:
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

export default ActiveCases;