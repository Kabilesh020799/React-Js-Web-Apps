import React from "react";
import ProjectList from "../ProjectList/ProjectList";

import Form from "./../Form/form";

function RightScreen({ show, change }) {
  return (
    <div className="right">
      {show ? <ProjectList change={change} /> : <Form />}
    </div>
  );
}

export default RightScreen;
