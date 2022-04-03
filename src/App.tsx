import { useEffect, useState } from "react";
import "./App.css";
import { Box, CircularProgress, SxProps } from "@mui/material";
import {
  getCryptocurrencies,
  getInfoAboutCryptoCurrencies,
} from "./api/api.servise";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";

const MainContainerStyle: SxProps = {
  minHeight: "100vh",
  height: "100%",
  width: "100%",
};

export interface ICurrData {
  id: number;
  name: string;
  quote: any;
  circulating_supply: number;
  symbol: string;
  cmc_rank: string;
  logo: string;
}

interface ICurrResponse {
  data: ICurrData[];
}

function App() {
  const [data, setData] = useState<ICurrData[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<ICurrData>(data[0]);
  useEffect(() => {
    (async () => {
      const response: ICurrResponse = await getCryptocurrencies(1, 10, "USD");
      const logos: ICurrResponse = await getInfoAboutCryptoCurrencies(
        response.data.map((i) => i.id)
      );
      const transformedData = response.data.map((el) => ({
        ...el,
        logo: logos.data[el.id].logo,
      }));
      console.log(transformedData);
      setData(transformedData);
      setSelectedCurrency(transformedData[0]);
    })();
  }, []);

  return (
    <Box sx={MainContainerStyle}>
      {data.length > 0 ? (
        <>
          <Sidebar data={data} setSelectedCurrency={setSelectedCurrency} />
          <Content data={selectedCurrency} />{" "}
        </>
      ) : (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </Box>
  );
}

export default App;
