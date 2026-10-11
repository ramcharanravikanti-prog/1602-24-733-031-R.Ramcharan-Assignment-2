
import React, { Component } from "react";
import DigitalClock from "./components/DigitalClock";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showClock: true
    };
  }

  toggleClock = () => {
    this.setState((prevState) => ({
      showClock: !prevState.showClock
    }));
  };

  render() {
    return (
      <div>
        <h1>Digital Clock</h1>

        <button onClick={this.toggleClock}>
          {this.state.showClock ? "Hide Clock" : "Show Clock"}
        </button>

        {this.state.showClock && <DigitalClock />}
      </div>
    );
  }
}

export default App;
