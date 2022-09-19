import React, { Component } from "react";
import { Switch, Route, useParams, withRouter, Redirect } from 'react-router-dom';
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Announcement from "./AnnouncementComponent";
import AnnouncementDetail from "./AnnouncementDetailComponent";
import Post from "./PostComponent";
import PostDetail from "./PostDetailComponent";
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
          </Switch>
          
          <Footer />
      </div>
  );
}
}

export default withRouter(connect(mapStateToProps)(Main));
