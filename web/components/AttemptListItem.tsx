import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// TODO: Share this type in the backend
export enum Result {
  ACCEPT,
  REJECT,
}

interface AttemptListItemProps {
  confidence: string;
  time: string;
  deviceId: string;
  deviceName: string;
  result: Result;
}

function AttemptListItem({
  confidence,
  time,
  deviceId,
  deviceName,
  result,
}: AttemptListItemProps) {
  return (
    <StylishListItem>
      <div className="icon">
        <FaCheckCircle />
      </div>
      <div className="data">
        <div className="result">
          <p className="result-text">
            Accepted{` `}
            <span className="result-confidence">(95%)</span>
          </p>
        </div>
        <time>6:45 PM EST - December 25, 2020</time>
        <p className="device">Leander's Infravenous Device</p>
      </div>
    </StylishListItem>
  );
}

const StylishListItem = styled.li`
  display: grid;
  grid-template-columns: 3rem auto;
  column-gap: 2rem;
  list-style: none;
  padding: 1.5rem 0;
  .icon {
    color: #2fda90;
    font-size: 3rem;
    display: inline-block;
    align-self: center;
    line-height: 0;
  }
  .data {
    display: inline-block;
  }

  .result {
    display: flex;
    font-weight: bold;
    align-items: center;
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
