import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Header from "./Mainpages/HeaderComponent";
import Home from "./Mainpages/HomeComponent";
import Footer from "./Mainpages/FooterComponent";
import Contact from "./Mainpages/ContactComponent";
import Announcement from "./Mainpages/AnnouncementComponent";
import AnnouncementDetail from "./Mainpages/AnnouncementDetailComponent";
import Post from "./Mainpages/PostComponent";
import PostDetail from "./Mainpages/PostDetailComponent";
import Login from "./Login/LoginComponent";
import SignUp from "./Login/SignUpComponent";
import Admin from "./Admin/AdminComponent";
import { connect } from "react-redux";

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

    const PostWithId = ({match}) =>{
      return(
        <PostDetail post = {this.props.posts.filter((post) => post.id === parseInt((match.params.postId), 10))[0]} />
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
            <Route path="/posts/:postId" component={PostWithId} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/signup" component={() => <SignUp />} />
            <Route exact path="/devadmin123" component={() => <Admin />} />
            <Redirect to="/home" />
          </Switch>
          
          <Footer />
      </div>
  );
}
}

export default withRouter(connect(mapStateToProps)(Main));
