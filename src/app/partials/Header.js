import React from 'react'
import { Link } from 'react-router-dom'
const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo center">React Users</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><Link to="../About">About</Link></li>
                <li><a onClick={props.refreshPage}><i className="material-icons">refresh</i></a></li>
                <li><a onClick={props.viewChange}><i className="material-icons"> { props.isGrid ? "apps" : "list" } </i></a></li>
                </ul>
            </div>
        </nav>

        

    )
}
export default Header;