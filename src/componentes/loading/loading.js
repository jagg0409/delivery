import './loading.css'; // Add styling for your loading screen
import React, { Component } from 'react';

class LoadingScreen extends Component {
  

  render() {
    // Your component rendering logic
    // You can access isLoading from this.state.isLoading
    return (
      <div>
        <img src="/icon.png" className='img-animation' />
      </div>
    );
  }
}

export default LoadingScreen;