import React from 'react';
import './Toolbar.css';
import {Link} from 'react-router-dom';


import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton  click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">
                <Link to="/">
                    Aurang!
                </Link>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
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
            </div>
        </nav>
    </header>
)


export default toolbar;