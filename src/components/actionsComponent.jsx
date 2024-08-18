import { Box } from "@chakra-ui/react";
import plusIcon from "../assets/plusIcon.svg";
import fullscreen from "../assets/fullscreen.svg";
import TimeRange from "./timeRange";

function ActionComponent() {
  return (
    <Box display={"flex"} justifyContent={"space-between"} w={"90%"} my={10}>
      <Box display={"flex"} justifyContent={"space-between"} gap={5}>
        <Box fontSize={20} display={"flex"} gap={2} height={"30px"}>
          <img src={fullscreen} alt="Fullscreen Icon" />
          Fullscreen
        </Box>
        <Box fontSize={20} display={"flex"} gap={2} height={"30px"}>
          <img src={plusIcon} alt="Plus Icon" />
          Compare
        </Box>
      </Box>
      <Box fontSize={20}>
        <TimeRange />
      </Box>
    </Box>
  );
}
export default ActionComponent;
