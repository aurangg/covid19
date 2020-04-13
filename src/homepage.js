import React from 'react';
//import DataFile from './DataFile';
// import CasesByCountry from './CasesByCountry'
//import SideDrawer from './components/SideDrawer/SideDrawer';
//import Backdrop from './components/Backdrop/Backdrop';
//import NewCases from './components/Data/NewCases';
import RecoveredCases from './new/recoveredcases';
import Loader from './components/Common/Loading';
import Confirmed from './new/confirmed';
import NewCase from './new/newcase';
import Deaths from './new/deaths';


class Homepage extends React.Component{
    state={
      loading: true,
      items: [],
      heading: "Covid-19 Cases in ",
      query: "Pakistan",
      date:null,
      time:null,
      newcases:null,
      oldcases:null,
      oldRecover:null,
      todayRecover:null,
      prevDaysDeath:null,
      totalCases: null,
      loadDivs:null,
    }

    async componentDidMount() {
      let today = new Date().toISOString().slice(0, 10)
      let prevDate = new Date(Date.now() - 864e5).toISOString().slice(0, 10)
      //console.log(prevDate, today)
      const url = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${this.state.query}`
      const response = await fetch(url, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"
                }})
  
          const data = await response.json()
          const items = data
          
          //this.setState({items: items, loading: false})
          //console.log(data)
  
          let newArr = []
          newArr = items.latest_stat_by_country[0].record_date
          let olddate = newArr.split(' ')
          let timeFuncConst = olddate[1]
          
          let myDate = new Date(olddate[0]) 
          
          let date = myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear()
          //console.log(date)
  
          const separtor = '.'
          

          function splitTime(timeSample, dot){
            const timeArray = timeSample.split(dot)
            return timeArray
          }
          let time  = splitTime(timeFuncConst, separtor)
          
          let totalCases = data.latest_stat_by_country[0].total_cases;
  
        //Second Query
  
        const urlSecond = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_particular_country_by_date.php?country=${this.state.query}&date=${today}`
        const responseSec = await fetch(urlSecond, {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
              "x-rapidapi-key": "7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"
          }
        })
        const dataSec = await responseSec.json()
        console.log(dataSec)
        let indexFirst = data.latest_stat_by_country.length -1 
        const oldcases = dataSec.stat_by_country[indexFirst].new_cases
        //const todayCases = data.latest_stat_by_country[0].new_cases
        
  
  
        //Third Query
  
        const todayRecover = data.latest_stat_by_country[0].total_recovered
        const oldRecover = dataSec.stat_by_country[indexFirst].total_recovered
  
  
        //Fourth Query
  
        const prevDaysDeath = dataSec.stat_by_country[indexFirst].new_deaths
        //const deathPrev = dataSec.stat_by_country[0].total_deaths
  

        //Fifth Query
        
        //let index = dataSec.stat_by_country.length - 1
        
        //console.log(prevDaysDeath)
        //const oldcases = dataSec.stat_by_country[0].new_cases
        
        //All SetState Statements
        
        this.setState({
            items:items,
            newcases:data,
            oldcases:oldcases,
            date:date,
            time:time[0],
            oldRecover:oldRecover,
            todayRecover:todayRecover,
            prevDaysDeath:prevDaysDeath,
            totalCases:totalCases,
            loading: false,
        })
        document.title = `Pakistan - ${totalCases}`
        
     }
    
  
    drawerToggleClickHandler = () =>{
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen}
      })
    }
  
    backdropToggleClickHandler = () => {
      this.setState({
        sideDrawerOpen:false
      })
    }
    render(){
     
      let {loading, items,query, heading, date, time, newcases, oldcases, oldRecover, todayRecover, prevDaysDeath, totalCases} = this.state;
      let confirmedProps = {heading, date, time, items, query}
      let newcaseProps = {newcases, oldcases, totalCases};
      let recoveredProps = {newcases, oldRecover, todayRecover}
      let deathProps = {newcases, prevDaysDeath}
      if(loading)
      {
        return <Loader />
      }
      if(!items)
      {
        return(
          <div>Hello, sorry</div>
        )
      }
      return (
        <div style={{height:'100%'}}>
          
          <div style={{marginTop:'70px'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <Confirmed confirmedProps={confirmedProps} />
                  <div className="row">
                    <div className="col-lg-4">
                      <NewCase newcaseProps={newcaseProps} />
                    </div>
                    <div className="col-lg-4">
                      <RecoveredCases recoveredProps={recoveredProps} />
                    </div>
                    <div className="col-lg-4">
                      <Deaths deathProps={deathProps} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Homepage;
  