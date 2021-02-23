import styled from "styled-components";
import AttemptListItem, { Result } from "./AttemptListItem";
import { Button } from "./base";
import { RightAlign } from "./util";

const fakeProps = {
  confidence: "0.9",
  result: Result.ACCEPT,
  deviceName: "Device #00",
  time: "1614115520054",
  deviceId: "601ee91c51a7905d4c421269",
};

function AttemptList() {
  const attmemptsToDisplay = [1, 2, 3, 4, 5];
  return (
    <StylishAttemptList>
      {attmemptsToDisplay.map((_item, index) => {
        return (
          <>
            <AttemptListItem {...fakeProps} />
            {index !== attmemptsToDisplay.length - 1 && <hr />}
          </>
        );
      })}
      <RightAlign>
        <Button className="small">View more</Button>
      </RightAlign>
    </StylishAttemptList>
  );
}

const StylishAttemptList = styled.ul`
  padding: 0;
`;

export default AttemptList;
