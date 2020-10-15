import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Radio, Button, Select, Modal } from "antd";

import "./form.css";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
function FormDisplay() {
  const [repos, setRepos] = useState(["Add GitName"]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [repo, setRepo] = useState("");
  const [vis, setVis] = useState(false);
  const [gitName, setGitName] = useState("");
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };
  const [form] = Form.useForm();
  const onSubmit = () => {
    axios
      .post("https://form-1b219.firebaseio.com/post.json", {
        name,
        gender,
        email,
        gitName,
        repo,
      })
      .then((res) => console.log(res));
    setRepos([]);
    setName("");
    setGender("");
    setEmail("");
    setRepo("");
    setGitName("");
    form.resetFields();
  };
  const clicked = async () => {
    setVis(true);
    console.log(gitName);
    const response = await axios.get(
      `https://api.github.com/users/${gitName}/repos`
    );
    console.log(response.data);
    setRepos(response.data);
  };
  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onSubmit}
      {...formItemLayout}
      className="form"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Enter your name" }]}
        className="form_name"
      >
        <Input
          onChange={(value) => setName(value.target.value)}
          className="form_field"
        />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true }]}
        className="form_name"
      >
        <Radio.Group
          className="form_field"
          placeholder="Select an option"
          onChange={(event) => {
            setGender(event.target.value);
          }}
          allowClear
        >
          <Radio style={radioStyle} value="male">
            Male
          </Radio>
          <Radio style={radioStyle} value="female">
            Female
          </Radio>
          <Radio style={radioStyle} value="other">
            Other
          </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        className="form_name"
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            message: "The input is not a valid Email",
          },
          {
            required: true,
            message: "Please input your E-mail Id",
          },
        ]}
      >
        <Input
          className="form_field"
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        className="form_name"
        name="gitname"
        label="GitHub Name"
        rules={[{ required: true, message: "Enter your Github Id" }]}
      >
        <Input
          onChange={(event) => setGitName(event.target.value)}
          className="form_field"
        />
      </Form.Item>
      <Form.Item className="form_name" name="repo" label="Select an Repository">
        <Button type="dashed" htmlType="button" onClick={clicked}>
          Select Repository
        </Button>
        <Input value={repo} />
        <Modal
          title="Select a Repository"
          visible={vis}
          onOk={() => setVis(false)}
          onCancel={() => setVis(false)}
        >
          <Select
            className="form_field"
            placeholder="Repository"
            onChange={(event) => {
              setRepo(event);
              console.log(event);
            }}
            allowClear
          >
            {repos &&
              repos.map((repo) => (
                <Option key={repo.id} value={repo.name}>
                  {repo.name}
                </Option>
              ))}
          </Select>
        </Modal>
      </Form.Item>
      <Form.Item {...tailFormItemLayout} style={{ textAlign: "center" }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormDisplay;
