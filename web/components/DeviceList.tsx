import DeviceListItem from "./DeviceListItem";
import { List } from "./base";
import { gql, useQuery } from "@apollo/client";
import { useUser } from "../lib/useUser";
import Loading from "./Loading";
import { baseLong } from "../lib/formatDate";

const DEVICE_LIST_QUERY = gql`
  query DEVICE_LIST_QUERY($userId: ID!) {
    allDevices(where: { users_some: { id: $userId } }) {
      name
      description
      attempts(sortBy: scanTime_DESC, first: 1) {
        scanTime
      }
    }
  }
`;

function DeviceList() {
  const user = useUser();
  const { data, loading, error } = useQuery(DEVICE_LIST_QUERY, {
    variables: { userId: user?.id },
  });
  if (loading || error) return <Loading />;
  let { allDevices: deviceList } = data;

  return (
    <List>
      {deviceList.map((deviceItem, index) => {
        let lastUsed = deviceItem?.attempts[0]?.scanTime;
        if (lastUsed) {
          lastUsed = baseLong(new Date(lastUsed));
        }
        const deviceListItemProps = {
          name: deviceItem?.name,
          description: deviceItem?.description,
          lastUsed: lastUsed ?? "Never",
        };
        return (
          <DeviceListItem
            key={index}
            {...deviceListItemProps}
            hasBreak={index !== deviceList.length - 1}
          />
        );
      })}
    </List>
  );
}

export default DeviceList;
