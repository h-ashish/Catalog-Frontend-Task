import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Chart from "./Chart";
import ActionComponent from "./actionsComponent";

function InfoTabs() {
  return (
    <Tabs
      position="relative"
      variant="unstyled"
      color={"#6F7177"}
      defaultIndex={1}
      size={"lg"}
    >
      <TabList>
        <Tab>Summary</Tab>
        <Tab>Chart</Tab>
        <Tab>Statistics</Tab>
        <Tab>Analysis</Tab>
        <Tab>Settings</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="3px" bg="#4B40EE" borderRadius="1px" />
      <TabPanels>
        <TabPanel>Summary</TabPanel>
        <TabPanel>
          <ActionComponent />
          <Chart />
        </TabPanel>
        <TabPanel>
          <p>Statistics</p>
        </TabPanel>
        <TabPanel>
          <p>Analysis</p>
        </TabPanel>
        <TabPanel>
          <p>Settings</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
export default InfoTabs;
