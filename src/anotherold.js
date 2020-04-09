import React from 'react';
import './App.css';
//import DataFile from './DataFile';
// import CasesByCountry from './CasesByCountry'
//import SideDrawer from './components/SideDrawer/SideDrawer';
import Toolbar from './components/Toolbar/Toolbar';
//import Backdrop from './components/Backdrop/Backdrop';
//import NewCases from './components/Data/NewCases';
import RecoveredCases from './new/recoveredcases';
import Loader from './components/Common/Loading';
import Confirmed from './new/confirmed';
import NewCase from './new/newcase';
import Deaths from './new/deaths';
import WorldWide from './world/worldwide';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


class App extends React.Component{
  state={
    loading: true,
    items: [],
    heading: "Covid-19 Cases in ",
    query: "Pakistan",
    date:[],
    newcases:null,
    oldcases:null,
    oldRecover:null,
    todayRecover:null,
    deathPrev:null,
  }
  async componentDidMount() {
    let today = new Date().toISOString().slice(0, 10)
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
        let date = olddate
        //console.log(date)



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
      const oldcases = dataSec.stat_by_country[0].new_cases
      //const todayCases = data.latest_stat_by_country[0].new_cases
      


      //Third Query

      const todayRecover = data.latest_stat_by_country[0].total_recovered
      const oldRecover = dataSec.stat_by_country[0].total_recovered


      //Fourth Query

      const deathPrev = dataSec.stat_by_country[0].total_deaths


      //All SetState Statements
      
      this.setState({
          items:items,
          newcases:data,
          oldcases:oldcases,
          date:date,
          oldRecover:oldRecover,
          todayRecover:todayRecover,
          deathPrev:deathPrev,
          loading: false,
      })
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
   
    let {loading, items,query, heading, date, newcases, oldcases, oldRecover, todayRecover, deathPrev} = this.state;
    let confirmedProps = {heading, date, items, query}
    let newcaseProps = {newcases, oldcases};
    let recoveredProps = {newcases, oldRecover, todayRecover}
    let deathProps = {newcases, deathPrev}
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
        <Router>
          <Toolbar />
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/worldwide" component={WorldWide} />
          </Switch>
        </Router>
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

export default App;
