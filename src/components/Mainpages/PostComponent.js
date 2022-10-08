import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle, CardText, CardHeader, CardImg, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom'

function RenderPostItem({post}){
    return(
        <Card>
            <CardHeader><h6>{post.name}</h6></CardHeader>
            {post.image ? <CardImg src={post.image} width="100%" height="250px"/> : null}
                    <CardBody>
                        <CardText>{post.content}
                        </CardText>
                    </CardBody>
                    <CardFooter className="text-right text-muted small"><p>
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(post.date))}
                    </p></CardFooter>
        </Card>
    )
}

const Post = (props) => {
    const post = props.post.map((post)=>{
        return(
                <div key={post.id} className="col-6 m-3">
                <RenderPostItem post={post}/>
            </div>

        )
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb className="m-1">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Posts</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Posts</h3>
                    <hr />
                </div>
            </div>
            <div className="col">
            {post}
            </div>
            
        </div>
    )
}

export default Post;