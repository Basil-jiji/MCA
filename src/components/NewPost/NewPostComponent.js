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
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class NewPost extends Component{
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
                    <div className="col">      
                        <h3>New Post</h3>
                        <hr />
                    </div>
                    <div className="container">
                        <div className="row row-content">
                            <div className="col-12">
                            <React.Fragment>
                        <LocalForm onSubmit={(values) => this.handleAnnouncementSubmit(values)}>

                            {/* Message */}
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Message</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="Upload" md={2}>Upload Files</Label>
                            <Col md={10}>
                            <Control.file model=".file" id="article" name="article" type="file"className="form-control"  accept="jpg, pdf, jpeg, docx, pdf"/>
                            </Col>
                            </Row>

                            {/* submit button */}
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Publish
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
            </React.Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPost;