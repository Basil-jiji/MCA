import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import {
  Label,
  Button,
  Row,
  Col
} from "reactstrap";

const required = (val) => val && val.length;
const maxLength =(len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);


class Pizada extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    
    handleSubmit(values){
        console.log("Current State is : " + JSON.stringify(values));
        alert("Current State is : " + JSON.stringify(values));
    }

    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                    <div className="col">      
                        <h3>Pizada</h3>
                        <hr />
                    </div>
                    <div className="container">
                        <div className="row row-content">
                            <div className="col-12">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                            <Label htmlFor="topic" md={2}>Topic</Label>
                            <Col md={10}>
                            <Control.text model=".topic" id="topic" name="topic" placeholder="Topic" className="form-control" 
                            validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}/>
                                        <Errors 
                                        className="text-danger" model=".topic" show="touched" 
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }} />
                            </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit"value="submit" color="primary">
                                        Upload
                                    </Button>
                                </Col>
                            </Row>

                  </LocalForm>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pizada;