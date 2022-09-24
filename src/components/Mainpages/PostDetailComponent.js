import React from "react";
import { Card, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderPost({post}){
    if (post != null){
        return(
            <div className="col-12 col-md-12 m-3">
                <Card className="text-center">
                    <CardBody>
                        <CardTitle>{post.firstName}</CardTitle>
                        <CardText>{post.post}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}


const PostDetail = (props) => {
    const posts = props.post

    if(posts == null){
        return(<div></div>);
    }

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb className="m-1">
                <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/posts">Posts</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        { props.post.name }
                    </BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>{props.post.name}</h3>
                    <hr />
                </div>
            </div>

            <div className="row">
                <RenderPost post={props.post} />
            </div>
        </div>
    )
}

export default PostDetail;