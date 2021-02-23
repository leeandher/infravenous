import styled from "styled-components";
import { NavPage } from "../../components/Page";
import { Card, HeadingText } from "../../components/base";

import AttemptList from "../../components/AttemptList";
import DeviceList from "../../components/DeviceList";

export default function OverviewPage() {
  return (
    <NavPage>
      <Layout>
        <div className="wrapper">
          <Card className="item attempts">
            <HeadingText>Recent login attempts</HeadingText>
            <AttemptList />
          </Card>
          <div className="item other">
            <Card className="other-item devices">
              <HeadingText>Manage your devices</HeadingText>
              <DeviceList />
            </Card>
            <Card className="other-item profile">
              <HeadingText>Your Profile</HeadingText>
              <ul>
                <li>test login 1</li>
                <li>test login 2</li>
                <li>test login 3</li>
                <li>test login 4</li>
                <li>test login 5</li>
              </ul>
            </Card>
          </div>
        </div>
      </Layout>
    </NavPage>
  );
}

const Layout = styled.main`
  padding-top: 10rem;
  background: #fff7f8;
  min-height: 90%;
  .wrapper {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
    .item {
      flex: 1;
      margin: 2rem 2rem;
      max-width: 800px;
      min-width: 300px;
    }
    .other {
      .other-item {
        margin-bottom: 2rem;
      }
    }
  }
`;
