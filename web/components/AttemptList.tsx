import Link from "next/link";
import styled from "styled-components";
import AttemptListItem, { Result } from "./AttemptListItem";
import { Button, List } from "./base";
import { RightAlign } from "./util";

const fakeProps = {
  confidence: "95",
  result: Result.ACCEPT,
  deviceName: "Leander's Infravenous Device #00",
  time: "6:45 PM EST - December 25, 2020",
};

function AttemptList() {
  const attemptList = [1, 2, 3, 4, 5];
  return (
    <List>
      {attemptList.map((_item, index) => {
        return (
          <AttemptListItem
            {...fakeProps}
            hasBreak={index !== attemptList.length - 1}
          />
        );
      })}
      <RightAlign>
        <Link href="/app/history">
          <Button className="small">View more</Button>
        </Link>
      </RightAlign>
    </List>
  );
}

export default AttemptList;
