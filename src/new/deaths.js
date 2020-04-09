import React from 'react';

const Deaths = (props) => {
    const {newcases, deathPrev} = props.deathProps;
    let spanClass2 ={
        fontSize:'12px', fontStyle:'italic', paddingLeft:'10px', color:'red', fontWeight:'bold'
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
                <div className="row" style={{padding:'20px 15px 5px 15px'}}>
                    <div className="col-6">
                        <h4 style={{textAlign:'right'}}>
                            Today:
                        </h4>
                    </div>
                    <div className="col-6" style={{display:'flex'}}>
                        <h4 style={{textAlign:'left', paddingRight:'10px'}}>
                            {d.total_deaths}
                            <span style={spanClass2}>
                                +{d.new_deaths}
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
                            {deathPrev}
                        </h4>
                        
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Deaths;