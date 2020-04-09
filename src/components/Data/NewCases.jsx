import React from 'react';
import './NewCases.css';
//import RecoveredCases from './RecoveredCases';
import Loading from '../Common/Loading';

class NewCases extends React.Component{

    constructor(props){
        super(props)
        this.state={
            newcases:null,
            oldcases:null,
            todayCases:null,
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
        const oldcases = dataSec.stat_by_country[0].new_cases
        const todayCases = data.latest_stat_by_country[0].new_cases
        this.setState({
            newcases:data,
            oldcases:oldcases,
            todayCases:todayCases,
            loading: false
        })
        //console.log(dataSec.stat_by_country[0].new_cases)
        //console.log(data)
        
    }

    render(){
        const {loading, newcases, oldcases, todayCases, src, srcRev} = this.state;

        let imageSRC =""

        if(todayCases > oldcases){
            imageSRC=src;
        }
        else{
            imageSRC=srcRev
        }

        if(loading){
            return(
                <div className="new_cases">
                    <Loading />
                </div>
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
                                            background: 'rgb(213,21,38)',
                                            background: 'linear-gradient(45deg, rgb(228, 28, 45) 7%, rgb(255, 52, 69) 62%)'
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
                                            <img src={imageSRC} className="center" alt="" />
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
            </React.Fragment>
        )
    }
}

export default NewCases;


// <h4 style={{padding:'20px 15px 5px 15px'}}>
//                                 Today: {e.new_cases}
//                             </h4>
//                             <h4 style={{padding:'5px 15px 20px 15px'}}>
//                                 Yesterday: {oldcases}
//                             </h4>