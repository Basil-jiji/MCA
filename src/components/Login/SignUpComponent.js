import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Nav,
  Label,
  NavItem
} from "reactstrap";
import Student from "./StudentSignUpComponent";
import Staff from "./StaffSignUpComponent";
import { Control } from "react-redux-form";


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
          <div className="row row-content">
            <div className="col-12">
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
                  <div className="col" >
                  <Row className="form-group">
                          <Label htmlFor="accountType" md={2}>
                            Account Type
                          </Label>
                          <Col md={10}>
                            <Control.select
                              model=".accountType"
                              className="form-control"
                              name="accountType"
                              onChange={this.selectAccountType}
                              innerRef={(input) => (this.role = input)}
                            >
                              <option value="student" selected>
                                Student
                              </option>
                              <option value="staff">Staff</option>
                            </Control.select>
                          </Col>
                        </Row>
                        <Row className="form-group">
                          {this.state.accountType == "staff" ? <Staff /> : null}
                          {this.state.accountType == "student" ? (
                            <Student />
                          ) : null}
                        </Row>
                  </div>
                        
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
