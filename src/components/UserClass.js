import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      useInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/swagatikasarangi10");
    const json = await data.json();
    this.setState({
      useInfo: json,
    });
    console.log("child component did mount");
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    //when the component disappers from the ui
  }
  render() {
    const { name, location } = this.state.useInfo;
    return (
      <div className="user-card">
        {/* <h1>Count: {this.state.count2}</h1>
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
        </button> */}
        <h2>Name: {this.state.useInfo.name}</h2>
        <h3>Location: {this.state.useInfo.location}</h3>
      </div>
    );
  }
}

export default UserClass;
