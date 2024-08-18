import { Container, Heading, Box, Text } from "@chakra-ui/react";
import InfoTabs from "./infoTabs";
import { useChartContext } from "../context/chartContext";
import { useEffect, useState } from "react";
const headingStyle = {
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "70px",
  lineHeight: "89px",
  color: "#1A243A",
};

const postfixStyle = {
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "30px",
  lineHeight: "30px",
  color: "#BDBEBF",
  marginLeft: "10px",
};

const textStyle = {
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "23px",
  color: " #67BF6B",
};
function BoxContainer() {
  const { state } = useChartContext();
  const [price, setPrice] = useState("");

  useEffect(() => {
    state.map((val) => {
      if (val.isActive) {
        setPrice(val.chartData[val.chartData.length - 1].value.toFixed(2));
      }
    });
  }, [state]);

  return (
    <Container maxWidth={"100%"} px={20}>
      <Box my={10} textAlign={"start"}>
        <Box display={"flex"}>
          <Heading sx={headingStyle}>{price}</Heading>
          <Text my={5} sx={postfixStyle}>
            USD
          </Text>
        </Box>
        <Text my={5} sx={textStyle}>
          +2,161.42(3.45%)
        </Text>
      </Box>
      <InfoTabs />
    </Container>
  );
}
export default BoxContainer;
