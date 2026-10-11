
import React, { Component } from "react";

class DigitalClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };

    this.timer = null;
  }

  componentDidMount() {
    console.log("Clock Mounted");

    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Clock Updated");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Clock Unmounted");
  }

  render() {
    return (
      <h2>{this.state.time.toLocaleTimeString()}</h2>
    );
  }
}

export default DigitalClock;
