import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./all.css";

class Welcome extends Component {
  render() {
    return (
      <div className="bg-success welcome">
        <h1>Welcome back</h1>
        <p>To keep connected with us please log in with your personal info</p>
        <Button className="mainbt">Sign in</Button>
      </div>
    );
  }
}

export default Welcome;
