import React from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar, NavLink } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, Redirect } from "react-router-dom";
import { get_details,fetchHotels } from "../features/hotel/hotelSlice"
import { getDetails } from "../api/get_request"
// import { useHistory } from "react-router-dom";


class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
        this.hotelDetail = this.hotelDetail.bind(this)
    }
    
    
    hotelDetail(){
        var self = this;
        var city_name = document.getElementById('search_city').value;
        window.location.href = '/?city='+city_name;
        
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/about">About</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/contact">Contact</NavLink>
                </Nav>
                <Form className="d-flex search_bar">
                    <Form.Control
                    type="search"
                    placeholder="City"
                    className="me-2"
                    aria-label="Search"
                    id='search_city'
                    />
                    <Button variant="outline-light" onClick={this.hotelDetail}>Search</Button>
                </Form>
                
            </Navbar.Collapse>     
        </Navbar>
          );
    }
}

// export default Navigation;

  
const mapDispatchToProps = { fetchHotels };

export default connect(null, mapDispatchToProps)(Navigation);