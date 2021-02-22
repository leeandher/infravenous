import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import { CURRENT_USER_QUERY } from "../lib/useUser";
import { Button, Input, Form, Card, HeadingText } from "./base";

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
  async function handleSubmit() {
    await signIn();
    resetForm();
  }
  return (
    <Card>
      <HeadingText>Log in</HeadingText>
      <Form method="POST" onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          autoComplete="email"
          // @ts-ignore
          value={inputs.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Your Password"
          autoComplete="password"
          // @ts-ignore
          value={inputs.password}
          onChange={handleChange}
        />
        <Button type="submit">Sign In</Button>
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
