import React, { Component } from "react";
import { NavItem, TabContent, TabPane } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Nav,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

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

  handleLogin(event){
    alert("Username :" + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked)
    event.preventDefault();
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
              <div className="row">
                <div className="col">
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
                        <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                          <Label htmlFor="username">Username</Label>
                          <Input
                            type="text"
                            id="username"
                            name="username"
                            innerRef={(input) => (this.username = input)}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="password">Password</Label>
                          <Input
                            type="text"
                            id="password"
                            name="password"
                            innerRef={(input) => (this.password = input)}
                          />
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="checkbox"
                              name="remember"
                              innerRef={(input) => (this.remember = input)}
                            />
                            Remember Me
                          </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">
                          Login
                        </Button>
                      </Form>
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
