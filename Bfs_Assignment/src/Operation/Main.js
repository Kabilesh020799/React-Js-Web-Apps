import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import "./Main.css";

import { FormControl, InputLabel, Select } from "@material-ui/core";

function Main() {
  const [tree, setTree] = useState([]);

  const NodeMap = {
    node1: {
      label: "Contact Info",
      value: 100,
      type: "BASIC",
      adjList: ["node2"],
    },
    node2: {
      label: "NemID",
      value: 95,
      type: "SERVICE",
      adjList: ["node3", "nodeBranch2"],
    },
    node3: {
      label: "Personal Address",
      value: 95,
      type: "BASIC",
      adjList: [],
    },
    nodeBranch2: {
      label: "Branch 2",
      value: 55,
      type: "BASIC",
      adjList: ["nodeBranch3"],
    },
    nodeBranch3: {
      label: "Branch 3",
      value: 25,
      type: "BASIC",
      adjList: [],
    },
  };

  useEffect(() => {
    var q = [];
    dfstree(q, "node1", "node2");
  }, []);

  const onClick = (event) => {
    console.log(event.target.value);
    var q = [];
    dfstree(q, "node1", `${event.target.value}`);
  };

  const dfstree = (q = [], x, y) => {
    q.push(x);
    if (x === y) {
      setTree([...q]);
    }
    for (const [key, value] of Object.entries(NodeMap)) {
      if (x === key) {
        for (var i = 0; i < value.adjList.length; i++) {
          dfstree(q, value.adjList[i], y);
          q.pop();
        }
      }
    }
  };

  const findValue = (x) => {
    for (const [key, value] of Object.entries(NodeMap)) {
      if (x === key) {
        return value;
      }
    }
  };

  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header1">
          <span className="main__headerText">
            Flow dropout per step and service
          </span>
          <div className="Oval-Copy">
            <div className="Combined-Shape "></div>
          </div>
        </div>
        <div className="main__header2">
          <FormControl>
            <InputLabel>Choose Branch</InputLabel>
            <Select native onChange={onClick}>
              {Object.entries(NodeMap).map(([key, value]) => (
                <option value={key} key={key}>
                  {value.label}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="main__body">
        {tree.map((tr, i) => (
          <Bar item={findValue(tr)} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Main;
