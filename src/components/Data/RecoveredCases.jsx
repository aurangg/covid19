import React from 'react';
import './NewCases.css';
//import RecoveredCases from './RecoveredCases';
import Loading from '../Common/Loading';

class RecoveredCases extends React.Component{

    constructor(props){
        super(props)
        this.state={
            newcases:null,
            oldRecover:null,
            todayRecover:null,
            src:"https://storage.cloud.google.com/theeducure/up-arrow.png",
            srcRev:"https://storage.cloud.google.com/theeducure/down.png",
            loading:true
        }

    }

    async componentDidMount(){
        const query = "Pakistan"
        let today = new Date().toISOString().slice(0, 10)
        const url = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${query}`
        const urlSecond = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_particular_country_by_date.php?country=${query}&date=${today}`
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"
            }
        })

        const responseSec = await fetch(urlSecond, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"
            }
        })

        
        const data = await response.json()
        const dataSec = await responseSec.json()
        const oldRecover = dataSec.stat_by_country[0].total_recovered
        const todayRecover = data.latest_stat_by_country[0].total_recovered
        this.setState({
            newcases:data,
            oldRecover:oldRecover,
            todayRecover:todayRecover,
            loading: false
        })
    }

    render(){
        const {loading, newcases, oldRecover, todayRecover, src, srcRev} = this.state;

        let imageSRC =""

        if(todayRecover > oldRecover){
            imageSRC=src;
        }
        else{
            imageSRC=srcRev
        }
        let difference = todayRecover - oldRecover
        if(loading){
            return(
                <Loading />
            )
        }
        if(!newcases){
            return(
                <div>
                    Sorry
                </div>
            )
        }
        return(
            <React.Fragment>
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
                                                {e.total_recovered} <p style={{display:'inline'}}>+ ({difference})</p>
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
            </React.Fragment>
        )
    }
}

export default RecoveredCases;