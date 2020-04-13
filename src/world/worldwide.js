import React from 'react';
import Globe from './globe';
import Loader from '../components/Common/Loading';
import WorldStats from './WorldStats';
import Cases from './cases/Cases'

class WorldWide extends React.Component{
    state={
        world:[],
        loading:true,
        worldDate:null,
        worldTime:null,
    }
    async componentDidMount(){
        const url = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php';
        const response =  await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"
            }
        })

        
        const data = await response.json()

        let newArray = []
        newArray = data.statistic_taken_at
        let olddate = newArray.split(' ')
        let myDate = new Date(olddate[0]) 
        let worldDate = myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear()
        //console.log(formatted)
        //console.log(olddate[1])

        const timeString = olddate[1]
        const timeSep = "."

        function splitTime(tStr, tSep){
            const timeArray = tStr.split(tSep)
            return timeArray
        }

        let worldTime = splitTime(timeString, timeSep)
        //console.log(worldTime[0])
        this.setState({
            world:data,
            worldDate:worldDate,
            worldTime: worldTime[0],
            loading:false
        })
        document.title = `World Report`
        //console.log(data)
        
    }

    render(){

        let {world, loading, worldDate, worldTime} = this.state;
        let worldProps = {world, worldDate, worldTime};
        let casesProps = {world};
        if(loading){
            return <Loader />
        }
        if(!world){
            return <h2 style={{textAlign:'center', padding:'30px'}}>Error</h2>
        }

        return(
            <div style={{marginTop:'70px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Globe />
                        </div>
                        <div className="col-lg-6">
                            <div className="world_report_heading">
                                <h2>World Report</h2>
                            </div>
                            <WorldStats worldProps={worldProps} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Cases casesProps={casesProps} />
                    </div>
                </div>
            </div>
        )
    }
}

export default WorldWide;