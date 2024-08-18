import { createContext, useContext, useReducer } from "react";
import { timeDataReducer as reducer } from "../state/reducer";
import { timeDataList as initialState } from "../mockData/testData";

const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ChartContext.Provider value={{ state, dispatch }}>
      {children}
    </ChartContext.Provider>
  );
};

export const useChartContext = () => {
  return useContext(ChartContext);
};
