import React, { Component } from "react";

class Admin extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12"> 
                        <h3>This a Admin Page</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;