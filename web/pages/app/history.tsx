import styled from "styled-components";
import AttemptList from "../../components/AttemptList";
import { Card, HeadingText, NavHero } from "../../components/base";
import { NavPage } from "../../components/Page";

export default function HistoryPage() {
  return (
    <NavPage>
      {/* Fix this Hero and Wrapper situation */}
      <NavHero>
        <Card className="item-full">
          <HeadingText>Authentication History</HeadingText>
          <AttemptList length={20} hideButton />
        </Card>
      </NavHero>
    </NavPage>
  );
}

const Wrapper = styled.main`
  display: flex;
  background: #fff7f8;
  padding: 5rem;
  padding-top: 12rem;
  align-items: top;
  justify-content: center;
  .item,
  .item-full {
    flex: 1;
    max-width: 500px;
    margin: 0 1.5rem;
  }
  .item-full {
    max-width: 900px;
  }
`;
