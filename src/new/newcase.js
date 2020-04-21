import React from 'react';
import '../components/Data/NewCases.css';

const NewCase = (props) => {
    const {newcases, oldcases} = props.newcaseProps;
    //console.log(typeof)
    //console.log(typeof oldcases)
   function newCasesFunction(nc, oc){
    let new_casesNUM = parseFloat(nc.replace(/,/g, ''))
    let old_casesNUM = parseFloat(oc.replace(/,/g, ''))
        if(new_casesNUM > old_casesNUM){
           return(
            <h4 id="figures" className="green">
            +{nc}
        </h4>
           )
        }
        else{
           return(
            <h4 id="figures">
            {nc}
        </h4>
           )
        }
    }
    return(
        <div className="new_cases">
            {newcases.latest_stat_by_country.map((e) => (
                <div key={e.id}>
                    <div className="new_cases_title" style={{
                            background: '#e5a929'
                    }}>
                        <h1>
                            New Cases
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
                            {newCasesFunction(e.new_cases, oldcases)}        
                        </div>
                    </div>
                    <div className="row row_class">
                        <div className="col-6">
                            <h4 id="days">
                                Yesterday:
                            </h4>
                        </div>
                        <div className="col-6">
                            <h4 id="figures" style={{color:'green'}}>
                                {oldcases}
                            </h4>
                        </div>
                    </div>
                    <div className="row row_class">
                        <div className="col-6">
                            <h4 id="days">
                                Active Cases:
                            </h4>
                        </div>
                        <div className="col-6">
                            <h4 id="figures">
                                {e.active_cases}
                            </h4>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NewCase;