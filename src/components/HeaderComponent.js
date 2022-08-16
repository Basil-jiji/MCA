import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component{
    render(){
        return(
            <>
        <Navbar dark>
            <div className="container">
                <NavbarBrand href="/">Logo</NavbarBrand>
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