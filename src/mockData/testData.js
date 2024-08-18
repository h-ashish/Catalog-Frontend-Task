import moment from "moment";
export const dataGenerator = (type) => {
  const newData = [];
  switch (type) {
    case "1d":
      for (let num = 0; num < 24; num++) {
        newData.push({
          date: moment()
            .subtract(num, "hours")
            .format("YYYY-MM-DD HH:mm")
            .substring(11),
          value: Math.floor(Math.random() * 10001),
        });
      }
      return newData;
    case "3d":
      for (let num = 0; num <= 3; num++) {
        newData.push({
          date: moment().subtract(num, "days").format("ll"),
          value: Math.floor(Math.random() * 10001),
        });
      }
      return newData.reverse();

    case "1w":
      for (let num = 0; num <= 7; num++) {
        newData.push({
          date: moment().subtract(num, "days").format("ll"),
          value: Math.floor(Math.random() * 10001),
        });
      }
      return newData.reverse();
    case "1m":
      for (let num = 0; num <= 30; num++) {
        newData.push({
          date: moment().subtract(num, "days").format("ll"),
          value: Math.floor(Math.random() * 10001),
        });
      }
      return newData.reverse();
    case "6m":
      for (let num = 0; num <= 6; num++) {
        newData.push({
          date: moment().subtract(num, "months").format("MMM YYYY"),
          value: Math.floor(Math.random() * 10001),
        });
      }
      return newData.reverse();
    case "1y":
      for (let num = 0; num <= 12; num++) {
        newData.push({
          date: moment().subtract(num, "months").format("MMM YYYY"),
          value: Math.floor(Math.random() * 10001),
        });
      }
      return newData.reverse();
    case "max":
      for (let num = 0; num <= 24; num++) {
        newData.push({
          date: moment().subtract(num, "months").format("MMM YYYY"),
          value: Math.floor(Math.random() * 10001),
        });
      }
      return newData.reverse();
  }
};

export const timeDataList = [
  {
    id: 1,
    variant: "ghost",
    colorScheme: "brand",
    isActive: false,
    label: "1d",
    chartData: dataGenerator("1d"),
  },
  {
    id: 2,
    variant: "ghost",
    colorScheme: "brand",
    isActive: false,
    label: "3d",
    chartData: dataGenerator("3d"),
  },
  {
    id: 3,
    variant: "solid",
    colorScheme: "brand",
    isActive: true,
    label: "1w",
    chartData: dataGenerator("1w"),
  },
  {
    id: 4,
    variant: "ghost",
    colorScheme: "brand",
    isActive: false,
    label: "1m",
    chartData: dataGenerator("1m"),
  },
  {
    id: 5,
    variant: "ghost",
    colorScheme: "brand",
    isActive: false,
    label: "6m",
    chartData: dataGenerator("6m"),
  },
  {
    id: 6,
    variant: "ghost",
    colorScheme: "brand",
    isActive: false,
    label: "1y",
    chartData: dataGenerator("1y"),
  },
  {
    id: 7,
    variant: "ghost",
    colorScheme: "brand",
    isActive: false,
    label: "max",
    chartData: dataGenerator("max"),
  },
];
