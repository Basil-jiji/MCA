import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText } from "reactstrap";
import { Link } from 'react-router-dom';


function RenderAnnouncement({announcement}){
    if (announcement != null){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardBody>
                        <CardTitle>{announcement.title}</CardTitle>
                        <CardText>{announcement.message}</CardText>
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


const AnnouncementDetail = (props) => {

    const announcements = props.announcement

    if(announcements == null){
        return(<div></div>);
    }

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/announcements">Announcements</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        { props.announcement.title }
                    </BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>{props.announcement.title}</h3>
                    <hr />
                </div>
            </div>

            <div className="row">
                <RenderAnnouncement announcement={props.announcement} />
            </div>
        </div>
    )
}

export default AnnouncementDetail;