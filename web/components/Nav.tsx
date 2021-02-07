import Link from "next/link";
import { Menu, Space, Button } from "antd";
import { CURRENT_USER_QUERY, useUser } from "../lib/useUser";
import { gql, useMutation } from "@apollo/client";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    endSession
  }
`;

function Nav() {
  const user = useUser();

  const [signOut, { error, loading }] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSignOut() {
    await signOut();
  }

  return (
    <Menu mode="horizontal">
      <Link href="/">
        <Button type="text">Infravenous</Button>
      </Link>
      <Space style={{ float: "right", marginRight: "0.8rem" }}>
        {!user ? (
          <>
            <Link href="/access">
              <Button>Log In</Button>
            </Link>
            <Link href="/access">
              <Button type="primary">Sign Up</Button>
            </Link>
          </>
        ) : (
          <Menu.Item onClick={handleSignOut}>Log Out</Menu.Item>
        )}
      </Space>
    </Menu>
  );
}

export default Nav;
