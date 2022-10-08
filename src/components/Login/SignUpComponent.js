import React, { Component } from "react";
import {
  Col,
  Row,
  Label,
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
          <div className="row row-content">
            <div className="col-12">
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
