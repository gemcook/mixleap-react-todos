import React, { Component } from "react";
import Title from "./Title";
import InputArea from "./InputArea";
import Lists from "./Lists";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="a__todos">
        <div className="b__title">
          <Title />
        </div>
        <div className="b__add-input">
          <InputArea />
        </div>
        <div className="b__lists">
          <Lists />
        </div>
      </div>
    );
  }
}

export default App;
