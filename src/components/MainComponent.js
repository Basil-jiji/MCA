import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Header from "./Mainpages/HeaderComponent";
import Home from "./Mainpages/HomeComponent";
import Footer from "./Mainpages/FooterComponent";
import Contact from "./Mainpages/ContactComponent";
import Announcement from "./Mainpages/AnnouncementComponent";
import AnnouncementDetail from "./Mainpages/AnnouncementDetailComponent";
import Post from "./Mainpages/PostComponent";
import SignUp from "./Login/SignUpComponent";
import Prayaana from "./Prayaana/PrayaanaComponent";
import { connect } from "react-redux";
import Admin from './Admin/AdminRouteComponent'
import LoginMain from "./Login/LoginMainComponent";
import Pizada from "./Pizada/PizadaComponent";

const mapStateToProps = state =>{
  return{
    toppers : state.toppers,
    placements: state.placements,
    announcements : state.announcements,
    posts: state.posts

  }
}

class Main extends Component{

    constructor(props){
      super(props);
    }
  render(){
    
    const Homepage = () =>{
      return(
        <Home 
        topper={this.props.toppers} 
        placement={this.props.placements} />
      )
    }

    const AnnouncementWithId = ({match}) =>{
      return(
        <AnnouncementDetail announcement={this.props.announcements.filter((announcement) => announcement.id === parseInt((match.params.announcementId), 10))[0]}
        />
      )
    }

    return (
      <div className="App">
          <Header />
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route exact path="/announcements" component={() => <Announcement announcement={this.props.announcements}/>} />
            <Route path="/announcements/:announcementId" component={AnnouncementWithId} />
            <Route exact path="/posts" component={() => <Post post={this.props.posts} />} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/login" component={() => <LoginMain />} />
            <Route exact path="/signup" component={() => <SignUp />} />
            <Route exact path="/prayaana" component={() => <Prayaana />} />
            <Route exact path="/pizada" component={() => <Pizada />} />
            <Route path="/admin" component={() => <Admin/>} />
            <Redirect to="/home" />
          </Switch>
          
          <Footer />
      </div>
  );
}
}

export default withRouter(connect(mapStateToProps)(Main));
