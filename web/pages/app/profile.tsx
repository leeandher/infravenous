import styled from "styled-components";
import {
  Card,
  Form,
  HeadingText,
  Input,
  NavHero,
  Button,
} from "../../components/base";
import { NavPage } from "../../components/Page";
import useForm from "../../lib/useForm";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY, useUser } from "../../lib/useUser";
import { useMutation } from "@apollo/client";
import { RightAlign } from "../../components/util";

const UPDATE_PROFILE_MUTATION = gql`
  mutation UPDATE_PROFILE_MUTATION($id: ID!, $email: String!, $name: String!) {
    updateUser(id: $id, data: { email: $email, name: $name }) {
      id
    }
  }
`;

export default function ProfilePage() {
  const user = useUser();
  const { inputs, handleChange } = useForm({
    email: user?.email,
    name: user?.name,
  });
  const [editProfile, { error, loading }] = useMutation(
    UPDATE_PROFILE_MUTATION,
    {
      variables: { id: user?.id, ...inputs },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  async function handleSubmit(e) {
    e.preventDefault();
    await editProfile();
    alert("Successfully Updated!");
  }
  return (
    <NavPage>
      <NavHero>
        <Card className="item">
          <UpdateProfileForm method="POST" onSubmit={handleSubmit}>
            <HeadingText>Your Profile</HeadingText>
            <div className="image-wrapper">
              <img src="/images/avatar-m.png" alt="Your display picture" />
            </div>
            <Input
              name="name"
              type="text"
              placeholder="Your Name"
              autoComplete="name"
              label="Name"
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
              label="Email"
              // @ts-ignore
              value={inputs.email}
              onChange={handleChange}
              required
            />
            <RightAlign>
              <Button type="submit" className="primary">
                Update Profile
              </Button>
            </RightAlign>
          </UpdateProfileForm>
        </Card>
      </NavHero>
    </NavPage>
  );
}

const UpdateProfileForm = styled(Form)`
  img {
    height: 200px;
  }
  .image-wrapper {
    text-align: center;
  }
`;
