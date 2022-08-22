import React, { Component } from "react";
import { Routes, Route} from 'react-router-dom';
import { TOPPERS } from "../shared/toppers";
import { PLACEMENTS } from "../shared/placements";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      toppers: TOPPERS,
      placements: PLACEMENTS
    }
  }
  render(){
    return (
      <div className="App">
          <Header />
          <Home topper={this.state.toppers} placement={this.state.placements}/>
          <Footer />
      </div>
  );
}
}

export default Main;
