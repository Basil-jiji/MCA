import React,{ Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderTopperItem({top}){
  return(
    <Card>
      <CardImg src={top.image} alt={top.name} />
      <CardBody>
        <CardTitle>{top.name}</CardTitle>
        <CardText>{top.score}</CardText>
      </CardBody>
    </Card>
  )
}

function RenderPlacementItem({placemt}){
  return(
    <Card>
      <CardImg src={placemt.image} alt={placemt.name}/>
      <CardBody>
        <CardTitle>{placemt.name}</CardTitle>
        <CardText>{placemt.company}</CardText>
      </CardBody>
    </Card>
  )
}

const Home = (props) => {
  const top = props.topper.map((top) => {
    return(
      <div key={top.id} className="col-12 col-md-5 m-1">
        <RenderTopperItem top={top}/>
      </div>
    )
  })

  const placemt = props.placement.map((placemt) => {
    return(
      <div key={placemt.id} className="col-12 col-md-5 m-1">
        <RenderPlacementItem placemt={placemt} />
      </div>
    )
  }) 


return(
  <div className="container">
    <h3>TOPPERS</h3>
    <hr />
    <div className="col-4">
      <div className="row">
        {top}
      </div>
    </div>
    <h3>PLACEMENTS</h3>
    <div className="col-4">
      <div className="row">
        {placemt}
      </div>
    </div>
  </div>
)
}

export default Home;

