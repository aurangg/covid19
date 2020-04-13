import React from 'react';

const RecoveredCases = (props) => {
    const {newcases, oldRecover, todayRecover} = props.recoveredProps
    let todayR = parseFloat(todayRecover.replace(/,/g, ''))
    let oldR = parseFloat(oldRecover.replace(/,/g, ''))
    let difference = todayR - oldR;
    //console.log(difference, todayR, oldR)
    //console.log(typeof oldR)
    function recoverDifferenceFunction(difference, tR, oR)
    {
        if(tR > oR){
            return(
                <h4 id="figures" className="green">
                    +{difference}
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
            {newcases.latest_stat_by_country.map((e) => (
                <div key={e.id}>
                    <div className="new_cases_title" style={{
                            background:'#07b673'
                            
                    }}>
                        <h1>
                            Newly Recovered
                        </h1>
                    </div>
                    <div className="spacing">
                    <div className="row row_class">
                        <div className="col-6">
                            <h4 id="days">
                                Today:
                            </h4>
                        </div>
                        <div className="col-6" style={{display:'flex'}}>
                            {recoverDifferenceFunction(difference, e.total_recovered, oldRecover)}
                        </div>
                    </div>
                    <div className="row row_class">
                        <div className="col-6">
                            <h4 id="days">
                                Yesterday:
                            </h4>
                        </div>
                        <div className="col-6">
                            <h4 id="figures">
                                {oldRecover}
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
                                {e.total_recovered}
                            </h4>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecoveredCases;