import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, } from 'reactstrap';
import { Link } from 'react-router-dom'

function RenderPostItem({post}){
    return(
        <Card className="text-center">
            <Link to={`/posts/${post.id}`}>
                <CardBody>{post.name}</CardBody>
            </Link>
        </Card>
    )
}

const Post = (props) => {
    const post = props.post.map((post)=>{
        return(
            <div key={post.id} className="col-12 col-md-12 m-1">
                <RenderPostItem post={post}/>
            </div>
        )
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Posts</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Posts</h3>
                    <hr />
                </div>
            </div>
            <div className="row">{post}</div>
        </div>
    )
}

export default Post;