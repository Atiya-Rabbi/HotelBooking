import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  state = {
      details : [],
  }

  componentDidMount() {

      let data ;

      axios.get('/api/hotel/')
      .then(res => {
          data = res.data;
          this.setState({
              details : data    
          });
      })
      .catch(err => {})
  }

render() {
  return(
    <div>
          {this.state.details.map((detail, id) =>  (
          <div key={id}>
          <div >
                <div >
                      <h1>{detail.hotel_name} </h1>
                      <h2>{detail.address}</h2>
                      <footer >--- by
                      <cite title="Source Title">
                      {detail.hotel_id}</cite>
                      </footer>
                </div>
          </div>
          </div>
          )
      )}
    </div>
    );
}
}

export default App;