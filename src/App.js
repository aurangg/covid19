import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Homepage from './homepage';
import WorldWide from './world/worldwide';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Preventions from './preventions/Preventions'
//import MainNews from './MainNews';
//import NewsPage from './News/NewsPage'
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
            <Route  exact path="/" component={Homepage} />
            <Route path="/worldwide" component={WorldWide} />
            <Route path="/covid19" component={Homepage} />
            <Route path="/preventions" component={Preventions} />
            {/* <Route exact path="/news" component={MainNews} /> */}
            {/* <Route path="/news/:id" component={NewsPage} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
