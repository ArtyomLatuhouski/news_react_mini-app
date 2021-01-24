import React from "react";
import { Component } from "react";


class ErrorLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="alert alert-danger" role="alert" style={{height:'30px',textAlign:"center",padding:'1px 0px',margin:'2px 0'}}>
        {this.props.errorText}
      </div>
    );
  }
}

export default ErrorLine;
