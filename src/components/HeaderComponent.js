import React, { Component } from "react";
import { Navbar, NavbarBrand, NavItem, NavbarToggler, Nav, Collapse } from "reactstrap";
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
            this.state = {
                isNavOpen: false
            };
            this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavopen: !this.isNavOpen
        })
    }

    render(){
        return(
            <>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav}/>
                <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="35" width="41" alt="Mca Dept"/></NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home"></span> Home
                        </NavLink>
                        </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/announcements">
                                <span className="fa fa-bullhorn"></span> Announcements
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/eventgallery">
                                <span className="fa fa-camera"></span> Events
                        </NavLink>
                    </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card"></span> Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>

        <div className="jumbotron">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Master of Computer Application</h1>
                        <p>
                            Master of Computer Application is the best course in Nehru College of Engineering and Research Centre.
                        </p>
                    </div>
                </div>
            </div>
        </div>

            </>
        )
    }
}

export default Header;