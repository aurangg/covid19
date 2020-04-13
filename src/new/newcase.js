import React from 'react';
import '../components/Data/NewCases.css';

const NewCase = (props) => {
    const {newcases, oldcases, totalCases} = props.newcaseProps;
   
   function newCasesFunction(nc, oc){
        if(nc < oc){
           return(
            <h4 id="figures" className="green">
            +{nc}
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
                            <h4 id="figures">
                                {oldcases}
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
                                {totalCases}
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