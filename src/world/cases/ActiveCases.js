import React from 'react';

const ActiveCases = (props) => {
    const {world, critical} = props.activeCasesProps;
    //console.log(critical)
    //console.log(world.world.total_recovered)
    //console.log(critical.response[28].cases.critical)
    function CalCases(w){
        for(let i=0; i< w.results; i++){
            if(w.response[i].country === "All"){
                return w.response[i].cases.critical;
            }
            //sum = sum + w.response[i].cases.critical
        }
    }
    let criticalCases = CalCases(critical)
    //console.log(typeof world.total_recovered)
    let rec = parseFloat(world.world.total_recovered.replace(/,/g, ''))
    let dea = parseFloat(world.world.total_deaths.replace(/,/g, ''))
    let total = parseFloat(world.world.total_cases.replace(/,/g, ''))
    let activeCases = total - rec - dea
    let mildCases = activeCases - criticalCases
    
    let mildPercentage = mildCases/total*100;
    let criticalPercentage = criticalCases/total*100;

    return(
        <div className="middle_cases">
            <div className="bg_headings">
                <h2>
                    Active Cases
                </h2>
            </div>
            <div className="cases_data">
                <h3>
                    {activeCases.toLocaleString()}
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
                            {mildCases.toLocaleString()}
                            <span id="spanID">
                                <h6 style={{color:'#0371EA'}}>
                                    ({mildPercentage.toFixed(2)}%)
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
                            {criticalCases.toLocaleString()}
                            <span id="spanID">
                                <h6 style={{color:'#c02f24'}}>
                                    ({criticalPercentage.toFixed(2)}%)
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