//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "./component/trafficLight.jsx";
// import Light from "./component/Light.jsx"


//render your react application

function App() {
    return (
      <div className="App">
        <TrafficLight initialValue={0} />
        <TrafficLight initialValue={1} />
      </div>
    );
  }
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
ReactDOM.render(<App />, document.querySelector("#app"));




// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// REFERENCES:
// https://codesandbox.io/s/traffic-light-using-hooks-xlw615w7ow?file=/src/TrafficLight.jsx:534-698
// https://codesandbox.io/s/ox19m9r23q?file=/src/index.js