import React from "react";
import { Card, CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText } from "reactstrap";
import { Link } from 'react-router-dom';


function RenderAnnouncement({announcement}){
    if (announcement != null){
        return(
            <div className="container">
            <div className="row-content">
            <div className="col-12 col-md-12 m-3">
                <Card>
                    <CardBody>
                        <CardTitle><h5>{announcement.title}</h5></CardTitle>
                        <CardText className="text-center">{announcement.message}
                        </CardText>
                        <CardText className="text-right text-muted small">
                            <p>
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(announcement.date))}
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


const AnnouncementDetail = (props) => {

    const announcements = props.announcement

    if(announcements == null){
        return(<div></div>);
    }

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb className="m-1">
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