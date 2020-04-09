import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Homepage from './homepage';
import WorldWide from './world/worldwide';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


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
      <div style={{height:'100%'}}>
        <Router>
          <Toolbar />
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} click={this.drawerToggleClickHandler} />
            {backdrop}
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/worldwide" component={WorldWide} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
