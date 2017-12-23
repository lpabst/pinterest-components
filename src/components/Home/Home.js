import React, { Component } from 'react';
import Pin from './../Pin/Pin.js';
import './Home.css';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      pins:[]
    }
  }

  componentDidMount(){
    axios.get('/mydatabase/getpins')
    then( response => {
      this.setState({
        pins: response.data.pins
      })
    })
  }

  render() {
    return (
      <div className="home">

        {
          this.state.pins.map( (item, i) => {
            return <Pin src={item.src} caption={item.caption} imgSource={item.imgSource} />
          })
        }

      </div>
    );
  }
}


export default Home;