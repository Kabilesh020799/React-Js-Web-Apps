import React, { useState } from "react";
import "./App.css";
import { Layout } from "antd";

import RightScreen from "./components/RightScreen/RightScree";

const { Header, Content, Sider } = Layout;

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Layout>
        <Header
          style={{ background: "dodgerblue", textAlign: "center" }}
          className="app_header"
        >
          Post Your Projects
        </Header>
        <Layout>
          <Sider
            style={{
              background: "lightgrey",
              justifyContent: "center",
              display: "flex",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Content
              className={`sider_content ${!show && "active"}`}
              onClick={() => setShow(false)}
            >
              Add a Project
            </Content>
            <Content
              className={`sider_content ${show && "active"}`}
              onClick={() => setShow(true)}
            >
              List of Projects
            </Content>
          </Sider>
          <Layout>
            <Content
              style={{
                height: "92vh",
                width: "100%",
              }}
            >
              <RightScreen show={show} change={() => setShow(false)} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
