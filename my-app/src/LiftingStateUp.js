import React, { Component } from 'react';

class LiftingStateUp extends Component{

    constructor(props){
        super(props);
    }

    render(){
        <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>
    }
}

export default LiftingStateUp;