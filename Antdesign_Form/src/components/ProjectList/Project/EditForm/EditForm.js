import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Input, Radio, Button, Select, Modal } from "antd";

import "./EditForm.css";

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
function FormDisplay({ proj, key1, setVis1 }) {
  const [repos, setRepos] = useState(["Select A Repository"]);
  const [name, setName] = useState(proj.name);
  const [gender, setGender] = useState(proj.gender);
  const [email, setEmail] = useState(proj.email);
  const [repo, setRepo] = useState(proj.repo);
  const [vis, setVis] = useState(false);
  const [gitName, setGitName] = useState(proj.gitName);

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };
  const [form] = Form.useForm();
  const onSubmit = () => {
    axios
      .put(`https://form-1b219.firebaseio.com/post/${key1}.json`, {
        name,
        gender,
        email,
        gitName,
        repo,
      })
      .then((res) => console.log(res));
    setVis1();
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
        label="Name"
        rules={[{ required: true, message: "Enter your name" }]}
        className="form_name"
      >
        <Input
          onChange={(value) => setName(value.target.value)}
          className="form_field"
          defaultValue={name}
        />
      </Form.Item>
      <Form.Item
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
          defaultValue={gender}
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
          defaultValue={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        className="form_name"
        label="GitHub Name"
        rules={[{ required: true, message: "Enter your Github Id" }]}
      >
        <Input
          defaultValue={gitName}
          onChange={(event) => setGitName(event.target.value)}
          className="form_field"
        />
      </Form.Item>
      <Form.Item className="form_name" name="repo" label="Select an Repository">
        <Button
          disabled={true}
          type="dashed"
          htmlType="button"
          onClick={clicked}
        >
          Select Repository
        </Button>
        <Input defaultValue={repo} disabled={true} />
        <Modal
          title="Select a Repository"
          visible={vis}
          onOk={() => setVis(false)}
          onCancel={() => {
            setVis(false);
            form.validateFields();
          }}
        >
          <Select
            className="form_field"
            placeholder="Repository"
            onChange={(event) => {
              setRepo(event);
            }}
            allowClear
          >
            {repos &&
              repos.map((repo, i) => (
                <Option key={i} value={repo.name}>
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
