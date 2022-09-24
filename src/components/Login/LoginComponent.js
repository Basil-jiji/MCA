import React, { Component } from "react";
import {Control, LocalForm, Errors } from "react-redux-form";
import { NavLink } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Nav,
  FormGroup,
  Label,
  Input,
  Button,
  NavItem
} from "reactstrap";

const required = (val) => val && val.length;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isSignInTabOpen : false,
        isLoginTabOpen : false
    };
    this.toggleLogIn = this.toggleLogIn.bind(this);
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleSignIn(){
    this.setState({
        isSignInTabOpen: !this.state.isSignInTabOpen,
        isLoginTabOpen: this.state.isLoginTabOpen
    })
  }
  
  toggleLogIn(){
    this.setState({
        isLoginTabOpen: !this.state.isLoginTabOpen,
        isSignInTabOpen: this.state.isSignInTabOpen
    })
  }

  handleLogin(values){
    console.log("Current State is : " + JSON.stringify(values));
    alert("Current State is : " + JSON.stringify(values));

    }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Login</h3>
            </div>
            <div className="container">
              <div className="row row-content">
                <div className="col-12">
                  <Card>
                    <CardBody>
                      <CardTitle>
                        <Nav className="nav-pills nav-fill" id="login">
                          <NavItem active>
                            <NavLink className="nav-link" to="/login" onClick={()=> this.toggleLogIn } >
                              <span className="">Login</span>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className="nav-link" to="/signup" onClick={()=> this.toggleSignIn } data-toggle="pill" >
                              <span className="">SignIn</span>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardTitle>

                      {/* Login Form Starts from here */}

                        <LocalForm onSubmit={this.handleLogin}>
                        <Row className="form-group">
                          <Label htmlFor="username" md={2}>Username</Label>
                          <Col md={12}>
                          <Control.text
                            model=".username"
                            id="username"
                            name="username"
                            placeholder="Username"
                            className="form-control"
                            validators={{required}}
                          />
                          <Errors className="text-danger" model=".username" show="touched" 
                              messages={{
                                required: 'Required '
                            }} />
                          </Col>
                        </Row>

                        <Row className="form-group">
                          <Label htmlFor="password" md={2}>Password</Label>
                          <Col md={12}>
                          <Control.text
                            type="password"
                            model=".password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                            validators={{required}}
                          />
                          <Errors className="text-danger" model=".password" show="touched" 
                              messages={{
                                required: 'Required'
                            }} />
                          </Col>
                        </Row>

                        <Row className="form-group">
                          <Col md={12}>
                            <div className="form-check">
                            <Label check>
                            <Control.checkbox model=".remember"
                              name="remember"
                              className="form-check-input"
                            />
                            {' '}
                            Remember Me
                          </Label>
                            </div>
                          </Col>
                        </Row>
                        <Row className="form-group">
                        <Col md={2}>
                            <Button type="submit"value="submit" color="primary">
                                Login
                            </Button>
                        </Col>
                    </Row>
                      </LocalForm>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
