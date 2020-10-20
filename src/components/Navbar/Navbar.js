  
import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import logo from '../Navbar/logo.png';
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <img className="navbar-logo" src={logo} alt="Logo" />
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <h1>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                                </h1>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
