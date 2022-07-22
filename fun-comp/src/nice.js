import React from "react";

class nice extends React.Component {
  render() {
    console.log(this.props);

    return <div>{this.props.name}</div>;
  }
}

export default nice;
