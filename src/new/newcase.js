import React from 'react';
import '../components/Data/NewCases.css';

const NewCase = (props) => {
    const {newcases, oldcases} = props.newcaseProps;
    
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
                    <div className="row" style={{padding:'20px 15px 5px 15px'}}>
                        <div className="col-6">
                            <h4 style={{textAlign:'right'}}>
                                Today:
                            </h4>
                        </div>
                        <div className="col-6" style={{display:'flex'}}>
                            <h4 style={{textAlign:'left', paddingRight:'10px'}}>
                                {e.new_cases}
                            </h4>
                        </div>
                    </div>
                    <div className="row" style={{padding:'5px 15px 20px 15px'}}>
                        <div className="col-6">
                            <h4 style={{textAlign:'right'}}>
                                Yesterday:
                            </h4>
                        </div>
                        <div className="col-6">
                            <h4 style={{textAlign:'left', paddingRight:'10px'}}>
                                {oldcases}
                            </h4>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NewCase;