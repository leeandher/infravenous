import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { Form, Input, Button, Card } from "antd";
import useForm from "../lib/useForm";
import { CURRENT_USER_QUERY } from "./User";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignInForm() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  const [signIn, { error, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    await signIn();
    resetForm();
  }
  return (
    <Form method="POST" onFinish={handleSubmit}>
      <Form.Item
        label="Email"
        name="email"
        htmlFor="email"
        rules={[
          {
            required: true,
            message: "Please input your email address!",
          },
        ]}
        {...layout}
      >
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
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        {...layout}
      >
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
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
