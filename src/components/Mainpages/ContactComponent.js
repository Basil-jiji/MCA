import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function Contact(){

    return(
        <>
        <div className='container'>
            <div className='row'>
                <Breadcrumb className="m-1">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                <h3>Contact US</h3>
                <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Office</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Nehru College of Engineering and Research Centre</h5>
                    <address>
                        Nila Gardens, Pampady, Thiruvilwamala<br/>
                        Thrissur, Kerala, India<br/>
                        PIN: 680 588<br/>
                        <i className="fa fa-phone fa-lg"></i>: +9199 1234 5678<br />
		                <i className="fa fa-fax fa-lg"></i>: +9199 8765 4321<br />
		                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:mca@ncerc">
                         mca@ncerc.in</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Random Pic or Something</h5>
                    </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>MCA Department</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Department</h5>
                    <address>
                        Kapila Block<br/>
                        Nila Gardens, Pampady, Thiruvilwamala<br/>
                        Thrissur, Kerala, India<br/>
                        PIN: 680 588<br/>
                        <i className="fa fa-phone fa-lg"></i>: +9199 1234 5678<br />
		                <i className="fa fa-fax fa-lg"></i>: +9199 8765 4321<br />
		                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:mcahod@ncerc">
                        departmentmca@ncerc.in</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Random Pic or Something</h5>
                    </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Admission Queries</h3>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <h5>Officer in Charge: Gopinath Muthukkad</h5>
                    <h5>Officer in Charge: Gopinath Muthukurissi</h5>
                    <h5>Officer in Charge: Gopinath Muthukandam</h5><br/>
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+919912345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:admissions@ncerc.in"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )

}

export default Contact;