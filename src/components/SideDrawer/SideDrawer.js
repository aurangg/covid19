import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';

const sideDrawer = props => {
    
    let classes = 'side_drawer'
    if(props.show){
        classes = 'side_drawer open'
    }
    return(
        <nav className={classes} onClick={props.click}>
            <ul>
            <Link to="/">
                <li>
                    Pakistan
                </li>
            </Link>
            <Link to="/worldwide">
                <li>
                    World Cases
                </li>
            </Link>
            <Link to="/preventions">
                <li>
                    Preventions
                </li>
            </Link>
            </ul>
        </nav>
    )
}

export default sideDrawer;