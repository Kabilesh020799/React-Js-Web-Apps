import React, { useState } from "react";
import { GithubOutlined, EditOutlined, DeleteFilled } from "@ant-design/icons";
import "./Project.css";
import Modal from "antd/lib/modal/Modal";

import EditForm from "./EditForm/EditForm";
import Axios from "axios";

function Project({ proj, key1 }) {
  const [vis1, setVis1] = useState(false);
  const deleteproj = (key1) => {
    Axios.delete(`https://form-1b219.firebaseio.com/post/${key1}.json`);
  };
  return (
    <div className="project">
      <div className="project_icon">
        <EditOutlined onClick={() => setVis1(true)} />
        <DeleteFilled onClick={() => deleteproj(key1)} />
        <a
          href={`https://github.com/${proj.gitName}/${proj.repo}`}
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <GithubOutlined />
        </a>
      </div>
      <div className="project_title">{proj.repo}</div>
      <div className="project_footer">
        <div>Name: {proj.name}</div>
        <div>Email: {proj.email}</div>
        <div>Gender: {proj.gender}</div>
        <div>GitHub Id:{proj.gitName}</div>
      </div>
      <Modal
        title="Edit the form"
        visible={vis1}
        onOk={() => setVis1(false)}
        onCancel={() => setVis1(false)}
      >
        <EditForm proj={proj} key1={key1} setVis1={() => setVis1(false)} />
      </Modal>
    </div>
  );
}

export default Project;
