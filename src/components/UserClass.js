import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  componentDidMount() {
    console.log("child component did mount");
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>Count: {this.state.count2}</h1>
        <button
          onClick={() => {
            //this.state.count2 = this.state.count2 + 1; // never update state variables directly
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          {" "}
          Count Increase
        </button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
