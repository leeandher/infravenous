import styled from "styled-components";
import DeviceListItem from "./DeviceListItem";
import { List } from "./base";

const fakeProps = {
  name: "Leander's Infravenous Device #00",
  description: "Office device, shared",
  lastUsed: "6:45 PM EST - December 25, 2020",
};

function DeviceList() {
  const deviceList = [1, 2];
  return (
    <List>
      {deviceList.map((_item, index) => {
        return (
          <DeviceListItem
            key={index}
            {...fakeProps}
            hasBreak={index !== deviceList.length - 1}
          />
        );
      })}
    </List>
  );
}

export default DeviceList;
