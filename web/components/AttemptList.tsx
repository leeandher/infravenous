import Link from "next/link";
import Loading from "./Loading";
import AttemptListItem, { Result } from "./AttemptListItem";
import { Button, List } from "./base";
import { RightAlign } from "./util";
import { gql, useQuery } from "@apollo/client";
import { useUser } from "../lib/useUser";
import { baseLong } from "../lib/formatDate";

const ATTEMPT_LIST_QUERY = gql`
  query ATTEMPT_LIST_QUERY($userId: ID!) {
    allAttempts(where: { user: { id: $userId } }, sortBy: scanTime_DESC) {
      confidence
      device {
        name
      }
      result
      scanTime
    }
  }
`;

interface AttemptListProps {
  size?: number;
  hideButton?: boolean;
}

function AttemptList({ size = null, hideButton = false }: AttemptListProps) {
  const user = useUser();
  const { data, loading, error } = useQuery(ATTEMPT_LIST_QUERY, {
    variables: {
      userId: user?.id,
    },
  });
  if (loading || error) return <Loading />;

  let { allAttempts: attemptList } = data;
  if (size) attemptList = attemptList.slice(0, size);

  return (
    <List>
      {attemptList.map((attemptItem, index) => {
        const attemptListItemProps = {
          confidence: attemptItem?.confidence,
          time: baseLong(new Date(attemptItem?.scanTime)),
          deviceName: attemptItem?.device?.name,
          result: attemptItem?.result,
        };
        return (
          <AttemptListItem
            key={index}
            {...attemptListItemProps}
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
