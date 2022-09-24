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

class Staff extends Component {

    constructor(props){
        super(props);
        this.state={

        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event){
        alert("FirstName :" + this.firstname.value + " LastName: " + this.lastname.value)
        event.preventDefault();
    }

    render(){
        return (
            <div className="container">
              <div className="row">
                <div className="col">
                  <Form onSubmit={this.handleLogin}>
                  <FormGroup>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input type="text" id="firstname" name="firstname" 
                    innerRef={(input) => (this.firstname = input)}/>
                  </FormGroup>
                  <FormGroup>
                      <Label htmlFor="lastname">Last Name</Label>
                      <Input type="text" id="lastname" name="lastname"
                      innerRef={(input) => (this.lastname = input)} />
                    </FormGroup>
                  <Button type="submit" value="submit" color="primary">
                    SignUp
                  </Button>
                  </Form>
                </div>
              </div>
            </div>
          );
    }
    
  }

  export default Staff;