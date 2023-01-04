import React from 'react';
import './NavBar.css';
import {
    Link
} from 'react-router-dom';

function NavBar(props) {
    return <div class="side-div">
        <nav class="side-nav">
            <ul class="no-bullets">
                {props.links.map((link, i) => <li>
                    <Link to={link[0]} key={i}>{link[1]}</Link>
                </li>)}
            </ul>
        </nav>
    </div>
}

export default NavBar;