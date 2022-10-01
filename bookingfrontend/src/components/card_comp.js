import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

class ImageAndText extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {  
        }  
        this.ObjectRow = this.ObjectRow.bind(this);  
    }  
    
    componentDidMount(){
    }

    ObjectRow(facility) {
        return(
            <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z"></path>
                </svg>
                {facility}<br/>
            </>
        );
    }

    render(){
        var facilities = this.props.detail.facility;
        var numrows = facilities.length;
        var type='radio'
        var cls = '';
        if(window.innerWidth<600)
            cls = 'auto'
        const rows = [];
        for (let i = 0; i < numrows; i++) {
            rows.push(this.ObjectRow(facilities[i]));
        }
        
        return (
            <>
                <Row >
                    <Col >
                    <Card className='card_view'>
                        <Card.Img variant="top" src={this.props.detail.images} className='card_view'/>
                    </Card>
                    </Col>
                    <Col md={cls}>
                        <Card className='card_view'>
                            <Card.Body>
                                <Card.Text>
                                    <NavLink  as={Link} to={`hotel/${this.props.detail.hotel_id}`}>
                                        <h3>{this.props.detail.hotel_name}</h3>
                                    </NavLink>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M15 8.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zM12 1.5a6.75 6.75 0 0 1 6.75 6.75c0 2.537-3.537 9.406-6.75 14.25-3.214-4.844-6.75-11.713-6.75-14.25A6.75 6.75 0 0 1 12 1.5zM12 0a8.25 8.25 0 0 0-8.25 8.25c0 2.965 3.594 9.945 7 15.08a1.5 1.5 0 0 0 2.5 0c3.406-5.135 7-12.115 7-15.08A8.25 8.25 0 0 0 12 0z"></path>
                                    </svg>
                                    {this.props.detail.address}
                                    </div>
                                    {rows}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="2">
                    </Col>
                </Row>
              <br />
            </>
          );
    }
}

export default ImageAndText;