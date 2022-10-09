import React from "react";
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
    <div>
      <div >
        <Card>
      <CardImg src={placemt.image} alt={placemt.name}/>
      <CardBody>
        <CardTitle>{placemt.name}</CardTitle>
        <CardText>{placemt.company}</CardText>
      </CardBody>
    </Card>
        </div>
      </div>

  )
}

const Home = (props) => {
  const top = props.topper.map((top) => {
    return(
        <RenderTopperItem top={top}/>
    )
  })

  const placemt = props.placement.map((placemt) => {
    return(
        <RenderPlacementItem placemt={placemt} />
    )
  }) 


return(
  <>
  <div className="jumbotron">
    <div className="container">
        <div className="row row-header">
            <div className="col-12 col-sm-6">
                <h1>Master of Computer Application</h1>
                    <p>
                      Master of Computer Application is the best course in Nehru College of Engineering and Research Centre.
                    </p>
              </div>
            </div>
          </div>
        </div>
  <div className="container">
    <h3>TOPPERS</h3>
    <hr />
    <div className="d-flex p-2 justify-content-around flex-wrap">
        {top}
    </div>
    </div>
  <div className="container">
      <h3>PLACEMENTS</h3>
      <hr />
      <div className="d-flex p-2 justify-content-around flex-wrap">
          {placemt}
      </div >
    </div>
    </>

)
}

export default Home;

