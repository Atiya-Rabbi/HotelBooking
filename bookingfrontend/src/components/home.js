import React, { useState }from 'react';
import { connect } from 'react-redux';
import ImageAndText from './card_comp';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { get_details, fetchHotels } from "../features/hotel/hotelSlice"


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isMenuOpened: false
        }
    }
    
    componentDidMount() {
        var self = this;
        self.props.fetchHotels()
        
    }

    handleClick() {
        // toggles the menu opened state
        this.setState({ isMenuOpened: !this.state.isMenuOpened });
    }

    render(){
        
        return(
            <Container>
                <h1>Hotel Booking</h1>
                
                <div>
                    {this.props.details.map((detail, id) =>  (
                        <ImageAndText detail={detail} key={id}/>
                    )
                )}
                </div>
            </Container>
            
        );
    }
}

// export default Home;
const mapDispatchToProps = { fetchHotels };


const mapStateToProps = (state) => ({
    details: state.hotel.hotel_details
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);