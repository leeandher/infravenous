import styled from "styled-components";
import { useUser } from "../lib/useUser";
import Link from "next/link";
import { Button } from "./base";

function ProfilePreview() {
  const user = useUser();
  return (
    <StylishProfilePreview>
      <img src="/images/avatar-m.png" alt="default avatar" className="avatar" />
      <div className="info">
        <p className="name">{user?.name}</p>
        <p className="email">{user?.email}</p>
        <p>
          Times Scanned: <span className="authCount">251</span>
        </p>
      </div>
      <div>
        <Link href="/app/profile">
          <Button>Update</Button>
        </Link>
      </div>
    </StylishProfilePreview>
  );
}

const StylishProfilePreview = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 10rem auto 1fr;
  column-gap: 1rem;
  justify-items: flex-end;
  .avatar {
    height: 100px;
  }
  .info > p {
    margin: 0;
  }
  .authCount {
    color: #ff7e6b;
    font-weight: bold;
  }
`;

export default ProfilePreview;
