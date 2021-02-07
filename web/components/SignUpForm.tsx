import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import useForm from "../lib/useForm";
import { CURRENT_USER_QUERY } from "./User";

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
    <StylishForm method="POST" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">
          Name
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            autoComplete="name"
            // @ts-ignore
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
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
