import styled from "styled-components";
import { Break, Button } from "./base";
import { FaUsb } from "react-icons/fa";

interface DeviceListItemProps {
  name: string;
  description: string;
  lastUsed: string;
  hasBreak: boolean;
}

function DeviceListItem({
  name,
  description,
  lastUsed,
  hasBreak,
}: DeviceListItemProps) {
  return (
    <>
      <StylishDeviceListItem>
        <div className="icon">
          <FaUsb />
        </div>
        <div>
          <p className="name">{name}</p>
          <p className="description">{description}</p>
          <p className="info">Last Used: {lastUsed}</p>
        </div>
        {/* TODO: Add the management stuff */}
        <div className="button-wrapper">
          <Button className="small">Manage</Button>
        </div>
      </StylishDeviceListItem>
      {hasBreak && <Break />}
    </>
  );
}

const StylishDeviceListItem = styled.li`
  display: grid;
  grid-template-columns: 3rem auto 1fr;
  column-gap: 2rem;
  list-style: none;
  padding: 1.5rem 0;
  align-items: center;
  justify-items: center;
  .icon {
    color: #828282;
    font-size: 3rem;
    display: inline-block;
    line-height: 0;
  }
  p {
    margin: 0;
  }
  .name {
    font-weight: bold;
  }
  .info {
    font-style: italic;
  }
`;

export default DeviceListItem;
