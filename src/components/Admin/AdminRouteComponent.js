import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import  Dashboard  from "./AdminDashboardComponent";
import AdminLogin from "./AdminLoginComponent";
import NewAnnouncement from "./NewAnnouncementComponent";

class Admin extends Component{

    render(){
        return(
            <div>
            <Switch>
                <Route path="/admin" exact><AdminLogin/></Route>
                <Route path="/admin/dashboard" exact><Dashboard /></Route>
                <Route path="/admin/newannouncement" exact><NewAnnouncement addAnnouncement={this.props.addAnnouncement}/></Route>
            </Switch>
        </div>
        )
    }

}

export default Admin;


