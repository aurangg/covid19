import React from 'react';
import './SideDrawer.css';


const drawerToggleButton  = props => (
    <button className="hamburger" onClick={props.click} >
        <div className="hamburger-piece"></div>
        <div className="hamburger-piece"></div>
        <div className="hamburger-piece"></div>
    </button>
)


export default drawerToggleButton;