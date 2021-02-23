import styled from "styled-components";
import { NavPage } from "../../components/Page";
import { Card, HeadingText } from "../../components/base";

import AttemptList from "../../components/AttemptList";

export default function OverviewPage() {
  return (
    <NavPage>
      <Layout>
        <Card className="item attempts">
          <HeadingText>Recent login attempts</HeadingText>
          <AttemptList />
        </Card>
        <Card className="item devices">
          <HeadingText>Manage your devices</HeadingText>
          <ul>
            <li>test login 1</li>
            <li>test login 2</li>
            <li>test login 3</li>
            <li>test login 4</li>
            <li>test login 5</li>
          </ul>
        </Card>
        <Card className="item profile">
          <HeadingText>Your Profile</HeadingText>
          <ul>
            <li>test login 1</li>
            <li>test login 2</li>
            <li>test login 3</li>
            <li>test login 4</li>
            <li>test login 5</li>
          </ul>
        </Card>
      </Layout>
    </NavPage>
  );
}

const Layout = styled.main`
  padding-top: 10rem;
  background: #fff7f8;
  display: flex;
  justify-content: space-around;
  min-height: 90%;
  align-items: flex-start;
  .item {
    flex: 1;
    margin: 2rem 2rem;
    max-width: 800px;
  }
`;
