import React from "react";
import { Card, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

function RenderPost({post}){
    if (post != null){
        return(
            <div className="container">
            <div className="row row-content">
            <div className="col-5 m-3">
                <Card>
                    <CardBody>
                        <CardTitle><h5>{post.name}</h5></CardTitle>
                        {post.image ? <CardImg src={post.image} alt="" width="100%" height="250px" /> : null}
                        
                        <CardText className="text-center">{post.content}
                        </CardText>
                        <CardText className="text-right text-muted small">
                            <p>
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(post.date))}
                            </p>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
            </div>
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