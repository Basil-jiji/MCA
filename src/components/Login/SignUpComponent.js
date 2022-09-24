import React, { Component } from "react";
import { NavItem, TabContent, Col, TabPane } from "react-bootstrap";
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
import Student from "./StudentSignUpComponent";
import Staff from "./StaffSignUpComponent";


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountType: "student",
    };

  }

  selectAccountType = (event) => {
    this.setState({ accountType: event.target.value });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>SignUp</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Card>
                <CardBody>
                  <CardTitle>
                    <Nav className="nav-pills nav-fill" id="login">
                      <NavItem active>
                        <NavLink
                          className="nav-link"
                          onClick={() => this.toggleLogIn}
                          to="/login"
                        >
                          <span className="">Login</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className="nav-link"
                          to="/signup"
                          onClick={() => this.toggleSignIn}
                          data-toggle="pill"
                          href="#pills-signup"
                        >
                          <span className="">SignIn</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </CardTitle>
                        <FormGroup>
                          <Label htmlFor="accountType" md={12}>
                            Account Type
                          </Label>
                          <Col md={12}>
                            <Input
                              type="select"
                              className="form-select"
                              id="accountType"
                              name="role"
                              onChange={this.selectAccountType}
                              innerRef={(input) => (this.role = input)}
                            >
                              <option value="student" selected>
                                Student
                              </option>
                              <option value="staff">Staff</option>
                            </Input>
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <div className="form-group">
                          {this.state.accountType == "staff" ? <Staff /> : null}
                          {this.state.accountType == "student" ? (
                            <Student />
                          ) : null}
                        </div>
                        </FormGroup>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
