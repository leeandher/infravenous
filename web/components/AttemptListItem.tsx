import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Break } from "./base";

// TODO: Share this type in the backend
export enum Result {
  ACCEPT,
  REJECT,
}

interface AttemptListItemProps {
  confidence: string;
  time: string;
  deviceName: string;
  result: Result;
  hasBreak: boolean;
}

function AttemptListItem({
  confidence,
  time,
  deviceName,
  result,
  hasBreak,
}: AttemptListItemProps) {
  return (
    <>
      <StylishAttemptListItem>
        <div className="icon">
          <FaCheckCircle />
        </div>
        <div className="data">
          <div className="result">
            <p className="result-text">
              {Result[result]}
              {` `}
              <span className="result-confidence">({confidence}%)</span>
            </p>
          </div>
          <time>{time}</time>
          <p className="device">{deviceName}</p>
        </div>
      </StylishAttemptListItem>
      {hasBreak && <Break />}
    </>
  );
}

const StylishAttemptListItem = styled.li`
  display: grid;
  grid-template-columns: 3rem auto;
  column-gap: 2rem;
  list-style: none;
  padding: 1.5rem 0;
  align-items: center;
  .icon {
    color: #2fda90;
    font-size: 3rem;
    display: inline-block;
    line-height: 0;
  }
  .data {
    display: inline-block;
  }
  .result {
    display: flex;
    font-weight: bold;
    .result-text {
      color: #2fda90;
      margin: 0;
    }
    .result-confidence {
      color: #828282;
      margin: 0;
    }
  }
  .device {
    margin: 0;
    font-style: italic;
  }
`;

export default AttemptListItem;
