import React, { Component } from "react";
import { Navbar, NavbarBrand, NavItem, NavbarToggler, Nav, Collapse, Button, Modal, ModalBody,ModalHeader, Form, FormGroup, Input, Label, Col } from "reactstrap";
import { NavLink } from 'react-router-dom';
import Login from "../Login/LoginComponent";


class Header extends Component{

    constructor(props){
        super(props);
            this.state = {
                isNavOpen: false,
                isModalOpen: false,
                isSignInModalOpen: false
            };
            this.toggleNav = this.toggleNav.bind(this);
            this.toggleModal = this.toggleModal.bind(this);
            this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavopen: !this.state.isNavOpen
        })
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username :" + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked)
        event.preventDefault();
    }

    render(){
        return(
            <>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
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
                        <NavLink className="nav-link" to="/posts">
                                <span className="fa fa-camera"></span> Posts
                        </NavLink>
                    </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card"></span> Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                    <Button outline color="danger" onClick={this.toggleModal}><span className='fa'></span> Prayaana </Button>
                    <NavItem>
                            <NavLink className="nav-link" to="/login">
                                <span className="fa fa-sign-in fa-lg"></span> Login
                            </NavLink>
                        </NavItem>                        
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
            </>
        )
    }
}

export default Header;