import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import { Form, Input, Button, Card } from "antd";
import { CURRENT_USER_QUERY } from "../lib/useUser";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUpForm() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "lgrodrig@uwaterloo.ca",
    name: "",
    password: "",
  });
  const [signUp, { error, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    await signUp();
    resetForm();
  }
  return (
    <Card title="Create an Account" hoverable>
      <Form method="POST" onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          htmlFor="name"
          rules={[{ required: true, message: "Please input your name!" }]}
          {...layout}
        >
          <Input
            name="name"
            type="text"
            placeholder="Your Name"
            autoComplete="name"
            // @ts-ignore
            value={inputs.name}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          htmlFor="email"
          rules={[
            { required: true, message: "Please input your email address!" },
          ]}
          {...layout}
        >
          Email
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            autoComplete="email"
            // @ts-ignore
            value={inputs.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          htmlFor="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          {...layout}
        >
          Password
          <Input
            name="password"
            type="password"
            placeholder="Your Password"
            autoComplete="password"
            // @ts-ignore
            value={inputs.password}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
