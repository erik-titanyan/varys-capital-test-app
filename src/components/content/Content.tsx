import { Grid, Typography, Box, SxProps } from "@mui/material";
import { ICurrData } from "../../App";

const MainContainerStyle: SxProps = {
  marginLeft: "256px",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  width: "unset",
  padding: "32px",
};

const BoxStyles: SxProps = {
  width: "108px",
  img: {
    width: "100%",
  },
};

interface IContentProps {
  data: ICurrData;
}

const Content: React.FC<IContentProps> = ({ data }) => {
  return (
    <Grid container gap={"32px"} sx={MainContainerStyle}>
      <Grid
        container
        gap="24px"
        justifyContent={"center"}
        sx={{ width: "unset" }}
      >
        <Typography>{data.cmc_rank}</Typography>
        <Typography>{data.name}</Typography>
        <Box sx={BoxStyles}>
          <img src={data.logo} alt="currency logo" />
        </Box>
      </Grid>
      <Grid container>
        <Grid container flexDirection={"column"} gap="8px">
          <Typography>{data.name} price</Typography>
          <Typography>${data.quote.USD.price.toFixed(2)}</Typography>
        </Grid>
        <Grid container gap={"48px"}>
          <Box>
            <Typography>Market cap</Typography>
            <Typography>${data.quote.USD.market_cap.toFixed(2)}</Typography>
          </Box>
          <Box>
            <Typography>Valume 24h</Typography>
            <Typography>${data.quote.USD.volume_24h.toFixed(2)}</Typography>
          </Box>
          <Box>
            <Typography>Circulating supply</Typography>
            <Typography>
              {data.symbol} {data.circulating_supply.toFixed(2)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
