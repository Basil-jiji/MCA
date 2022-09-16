import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardBody
} from "reactstrap";
import { Link } from 'react-router-dom';


//Normal function
function RenderAnnouncementItem({ announcement, onClick }){
  return(
    <Card>
      <Link to={`/announcements/${announcement.id}`}> 
      <CardBody>{announcement.title}</CardBody>
    </Link>
    </Card>
  );

}

  //Arrow Function
  const Announcement = (props) => {
    const announce = props.announcement.map((announcement) => {
      return (
        <div key={announcement.id} className="col-12 col-md-5 m-1">
          <RenderAnnouncementItem announcement={announcement} />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Announcement</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Announcement</h3>
            <hr />
          </div>
        </div>
        <div className="row">{announce}</div>
      </div>
    );
  }


export default Announcement;