import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ImageAndText from './card_comp';
import Container from 'react-bootstrap/Container';
import { get_details } from "../features/hotel/hotelSlice"
import { getDetails } from "../api/get_request"


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
        
    }
    
    componentDidMount() {
        var self = this;
        var search_city = document.getElementById('search_city').value;
        var cast = Promise.resolve(getDetails('city',search_city))
        cast.then(function(details){
            console.log(details)
            self.props.get_details(details)
            
        })
        
    }
    render(){
        return(
            <Container>
                <h1>Hotel Booking</h1>
                <div>
                    {this.props.details.map((detail, id) =>  (
                        <ImageAndText detail={detail}/>
                    )
                )}
                </div>
            </Container>
            
        );
    }
}

// export default Home;
const mapDispatchToProps = { get_details };


const mapStateToProps = (state) => ({
    details: state.hotel.hotel_details
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);