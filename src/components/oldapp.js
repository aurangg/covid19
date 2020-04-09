import React from 'react';
import './App.css';
import DataFile from './DataFile';
// import CasesByCountry from './CasesByCountry'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Toolbar from './components/Toolbar/Toolbar';
import Backdrop from './components/Backdrop/Backdrop';
import NewCases from './components/Data/NewCases';
import RecoveredCases from './components/Data/RecoveredCases';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      sideDrawerOpen: false,
      loading:true
    }
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
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropToggleClickHandler} />
    }
    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col-lg-8 offset-lg-2">
      //       <DataFile />
      //       <CasesByCountry />
      //     </div>
      //   </div>
      // </div>
      
      <div style={{height:'100%'}}>
        {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> */}
        {/* <SideDrawer show={this.state.sideDrawerOpen} /> */}
        {/* {backdrop} */}
        <div style={{marginTop:'70px'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <DataFile >
                </DataFile>
                <div className="row">
                  
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
