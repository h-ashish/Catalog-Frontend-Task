import { Button, ButtonGroup } from "@chakra-ui/react";
import { useChartContext } from "../context/chartContext";

function TimeRange() {
  const { state, dispatch } = useChartContext();
  console.log(state);

  const handleTimeChange = (id) => {
    dispatch({ type: "UPDATE_TIME_RANGE", payload: id });
  };
  return (
    <>
      <ButtonGroup variant="ghost" spacing="3" fontSize={20}>
        {state &&
          state?.map((val) => (
            <>
              <Button
                key={val.id}
                variant={val.variant}
                colorScheme={val.colorScheme}
                isActive={val.isActive}
                onClick={() => handleTimeChange(val.id)}
              >
                {val.label}
              </Button>
            </>
          ))}
      </ButtonGroup>
    </>
  );
}
export default TimeRange;
