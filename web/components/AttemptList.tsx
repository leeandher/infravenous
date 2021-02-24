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

function AttemptList({ length, hideButton = false }) {
  const attemptList = Array(length).fill(0);
  return (
    <List>
      {attemptList.map((_item, index) => {
        return (
          <AttemptListItem
            key={index}
            {...fakeProps}
            hasBreak={index !== attemptList.length - 1}
          />
        );
      })}
      {hideButton ? null : (
        <RightAlign>
          <Link href="/app/history">
            <Button>View more</Button>
          </Link>
        </RightAlign>
      )}
    </List>
  );
}

export default AttemptList;
