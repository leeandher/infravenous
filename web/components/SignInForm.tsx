import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
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
    <StylishForm method="POST" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            autoComplete="email"
            // @ts-ignore
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            type="password"
            placeholder="Your Password"
            autoComplete="password"
            // @ts-ignore
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign In</button>
      </fieldset>
    </StylishForm>
  );
}

const StylishForm = styled.form`
  input,
  label {
    display: block;
  }
`;
