import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import {
  Row,
  Col,
  Label,
  Button
} from "reactstrap";

const required = (val) => val && val.length;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  } 


  render() {
    return (
      <>
            <div className="container">
              <div className="row row-content">
                <div className="col-12">

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
                </div>
              </div>
            </div>
      </>
    );
  }
}

export default Login;
