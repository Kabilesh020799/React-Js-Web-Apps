import React, { Component } from "react";
import axios from "axios";
import Project from "./Project/Project";

export class ProjectList extends Component {
  state = {
    projects: [],
    keys: [],
  };
  getproj = async () => {
    const response = await axios.get(
      "https://form-1b219.firebaseio.com/post.json"
    );
    const data = response.data ? Object.values(response.data) : null;
    const data1 = response.data ? Object.keys(response.data) : null;
    this.setState({
      projects: data,
      keys: data1,
    });
  };
  componentDidMount() {
    this.getproj();
  }
  componentDidUpdate() {
    this.getproj();
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {this.state.projects &&
          this.state.projects.map((proj, i) => (
            <Project
              proj={proj}
              key1={this.state.keys[i]}
              key={this.state.keys[i]}
            />
          ))}
      </div>
    );
  }
}

export default ProjectList;
