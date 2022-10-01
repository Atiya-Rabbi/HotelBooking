import React from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { fetchSingleHotel } from '../features/hotel/singleHotelSlice'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Hotel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            innerWidth: window.innerWidth,
            all_hotel: this.props.all_hotel
        };
        this.sliderImg       = this.sliderImg.bind(this) 
        this.resize          = this.resize.bind(this)
        this.add_description = this.add_description.bind(this)
        this.add_rooms       = this.add_rooms.bind(this)
    }

    componentDidMount(){
        var self = this;
        window.addEventListener("resize", self.resize())
        
        var hotel_id = window.location.pathname.split('/').slice(-1)
        self.props.fetchSingleHotel(hotel_id);
        

    }

    componentDidUpdate(prevProps){
        var self = this;
        if(prevProps.all_hotel != self.props.all_hotel){
            if(self.props.all_hotel){
                var city_name = document.getElementById('search_city').value;
                self.props.history.push('/?city='+city_name)
            }
        }
    }

    add_description(){
        return(
            <>
            <div className='padding_20'>
                {this.props.hotel_desc}
            </div>

            <div className='padding_20'>
                <h4>Most Popular Facilities</h4>
                {this.props.hotel_facilities.map((item)=>(
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z"></path>
                        </svg>
                        {item}
                        {this.state.innerWidth>=600?
                        <br/>:null}
                    </>
                ))}
            </div>
            </>
        )
    }

    add_rooms(room_details){
        return(
            <Col>
                Price: €{room_details.price}
                <h5>Room Type: <span>{room_details.room_type}</span>({room_details.sleeps} Sleeps)</h5>
                <h6>Room Facilities:</h6>
                {room_details.facility.map((item)=>(
                    <>
                    <svg class="bk-icon -streamline-checkmark" fill="#008009" height="14" width="14" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false">
                        <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                    </svg>{item}
                    </>

                ))}
                
            </Col>
        )
    }

    resize() {
        this.setState({innerWidth: window.innerWidth})
    }


    sliderImg(img_src){
        var self = this;
        return(
            <Carousel.Item >
                <img
                    className="d-block for_mobile"
                    src={img_src}
                    alt="hotel image"
                />
                <Carousel.Caption>
                    <h3>{this.props.hotel_name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        )
    }

    render(){
        var len_imgs = this.props.hotel_imgs.length;
        let itemData = this.props.hotel_imgs
        var cards = []
        for(let i=0; i<len_imgs; i++){
            cards.push(this.sliderImg(itemData[i]))
        }
        
        var len_rooms = this.props.hotel_rooms.length;
        var rooms =[]
        for(let j=0; j<len_rooms; j++){
            rooms.push(this.add_rooms(this.props.hotel_rooms[j]))
        }

        return (
            <>
            <Container> 
                <div className='padding_20'>
                    <h2>{this.props.hotel_name}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15 8.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zM12 1.5a6.75 6.75 0 0 1 6.75 6.75c0 2.537-3.537 9.406-6.75 14.25-3.214-4.844-6.75-11.713-6.75-14.25A6.75 6.75 0 0 1 12 1.5zM12 0a8.25 8.25 0 0 0-8.25 8.25c0 2.965 3.594 9.945 7 15.08a1.5 1.5 0 0 0 2.5 0c3.406-5.135 7-12.115 7-15.08A8.25 8.25 0 0 0 12 0z"></path>
                    </svg>
                    {this.props.hotel_adrs}
                </div>
                {this.state.innerWidth>=600?
                    <Row >
                        <Col >
                            <ImageList sx={{ width: 500, height: 500 }} cols={3} rowHeight={250}>
                                {itemData.map((item) => (
                                    <ImageListItem key={item}>
                                    <img
                                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt='hotel image'
                                        loading="lazy"
                                    />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
                        <Col>
                        {this.add_description()}
                        </Col>
                    </Row>
                :null}
                {this.state.innerWidth<600?
                <>
                <Carousel >
                {cards}
                </Carousel>
                {this.add_description()}</>
                :null}
                <Row className='padding_20'>
                    {rooms}
                </Row>
            </Container>
            </>
        );
    }
}

const mapDispatchToProps = { fetchSingleHotel };

const mapStateToProps = (state) => ({
    hotel_id   : state.singleHotel.hotel_id,
    hotel_name : state.singleHotel.hotel_name,
    hotel_adrs : state.singleHotel.hotel_adrs,
    hotel_imgs : state.singleHotel.hotel_imgs,
    hotel_rooms: state.singleHotel.hotel_rooms,
    hotel_facilities: state.singleHotel.hotel_facilities,
    hotel_desc : state.singleHotel.hotel_desc,
    all_hotel: state.hotel.display,
    status: state.singleHotel.status,
    error : state.singleHotel.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Hotel);
// export default Hotel;