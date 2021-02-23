import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import { CURRENT_USER_QUERY } from "../lib/useUser";
import styled from "styled-components";
import { Card, Button, Input, Form, HeadingText } from "./base";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const { inputs, handleChange } = useForm({
    email: "",
    name: "",
    password: "",
  });
  const router = useRouter();
  const [signUp, { error, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    await signUp();
    router.push("/app/overview");
  }
  return (
    <Card>
      <Form method="POST" onFinish={handleSubmit}>
        <HeadingText>Create an account</HeadingText>
        <SubtitleText>
          or{` `}
          <Link href="/auth/signin">
            <span className="pinkLink">login to an existing account</span>
          </Link>
        </SubtitleText>
        <Input
          name="name"
          type="text"
          placeholder="Your Name"
          autoComplete="name"
          // @ts-ignore
          value={inputs.name}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          autoComplete="email"
          // @ts-ignore
          value={inputs.email}
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Your Password"
          autoComplete="password"
          // @ts-ignore
          value={inputs.password}
          onChange={handleChange}
          required
        />
        <RightAlign>
          <Button type="submit" className="primary">
            Register
          </Button>
        </RightAlign>
      </Form>
    </Card>
  );
}

// TODO: Remove duplicate code here and in SignInForm
const SubtitleText = styled.p`
  margin: 0;
  .pinkLink {
    color: #ff988c;
    cursor: pointer;
  }
`;

const RightAlign = styled.div`
  text-align: right;
`;
