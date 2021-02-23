import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import { CURRENT_USER_QUERY } from "../lib/useUser";
import { Button, Input, Form, Card, HeadingText } from "./base";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const { inputs, handleChange } = useForm({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [signIn, { error, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    await signIn();
    router.push("/app/overview");
  }
  return (
    <Card>
      <HeadingText>Log in</HeadingText>
      <SubtitleText>
        or{` `}
        <Link href="/auth/signup">
          <span className="pinkLink">create an account</span>
        </Link>
      </SubtitleText>
      <Form method="POST" onSubmit={handleSubmit}>
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
            Sign In
          </Button>
        </RightAlign>
      </Form>
    </Card>
  );
}

// TODO: Remove duplicate code here and in SignUpForm
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
