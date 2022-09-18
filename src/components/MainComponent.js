import React, { Component } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import { TOPPERS } from "../shared/toppers";
import { PLACEMENTS } from "../shared/placements";
import { ANNOUNCEMENTS } from "../shared/announcement";
import { POSTS } from "../shared/posts";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Announcement from "./AnnouncementComponent";
import AnnouncementDetail from "./AnnouncementDetailComponent";
import Post from "./PostComponent";
import PostDetail from "./PostDetailComponent";



class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      toppers: TOPPERS,
      placements: PLACEMENTS,
      announcements: ANNOUNCEMENTS,
      posts: POSTS
    }
  }
  render(){
    
    const Homepage = () =>{
      return(
        <Home 
        topper={this.state.toppers} 
        placement={this.state.placements} />
      )
    }

    const AnnouncementWithId = () =>{
      const params = useParams();
      return(
        <AnnouncementDetail announcement={this.state.announcements.filter((announcement) => announcement.id === parseInt((params.announcementId), 10))[0]}
        />
      )
    }

    const PostWithId = () =>{
      const params = useParams();
      return(
        <PostDetail post = {this.state.posts.filter((post) => post.id === parseInt((params.postId), 10))[0]} />
      )
    }

    return (
      <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/announcements" element={ <Announcement announcement={this.state.announcements}/>} />
            <Route path="/announcements/:announcementId" element={<AnnouncementWithId />} />
            <Route path="/posts" element={<Post post={this.state.posts} />} />
            <Route path="/posts/:postId" element={<PostWithId />} />
            <Route path="*" element={<Homepage />}/> {/* Change it into and error page by creating a new error */}
          </Routes>
          
          <Footer />
      </div>
  );
}
}

export default Main;
