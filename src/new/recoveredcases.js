import React from 'react';

const RecoveredCases = (props) => {
    const {newcases, oldRecover, todayRecover} = props.recoveredProps
    let difference = todayRecover - oldRecover;
     let spanClass ={
        fontSize:'12px', fontStyle:'italic', paddingLeft:'10px', color:'black'
    }
    let spanClass2 ={
        fontSize:'12px', fontStyle:'italic', paddingLeft:'10px', color:'green', fontWeight:'bold'
    }
    
    return(
        <div className="new_cases">
            {newcases.latest_stat_by_country.map((e) => (
                <div key={e.id}>
                    <div className="new_cases_title" style={{
                            background:'#1ae396'
                            
                    }}>
                        <h1>
                            Newly Recovered
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
                                {e.total_recovered}
                                <span style={difference  === 0 ? spanClass : spanClass2}>
                                    +{difference}
                                </span>
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
                                {oldRecover}
                            </h4>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecoveredCases;