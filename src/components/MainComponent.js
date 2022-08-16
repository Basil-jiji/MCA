import React, { Component } from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";

class Main extends Component {
    render(){
  return (
    <div className="App">
        <Header />
        <Footer />
    </div>
  );
}
}

export default Main;
