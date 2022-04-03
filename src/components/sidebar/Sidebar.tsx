import {
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  SxProps,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ICurrData } from "../../App";

const DrawerStyle: SxProps = {
  maxWidth: "256px",
  width: "100%",
};

const ListStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  paddingTop: "24px",
  span: {
    color: "#3F4246",
    fontSize: "18px",
    lineHeight: "25px",
  },
};

const ListItemStyle: SxProps = {
  justifyContent: "space-between",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(228, 255, 225, 0.3)",
  },
};

const ImgBoxStyle: SxProps = {
  width: "20px",
  img: {
    width: "100%",
    height: "100%",
  },
};

interface SidebarProps {
  data: ICurrData[];
  setSelectedCurrency: Dispatch<SetStateAction<ICurrData>>;
}

const Sidebar: React.FC<SidebarProps> = ({ data, setSelectedCurrency }) => {
  const handleClick = (el: ICurrData) => {
    setSelectedCurrency(el);
  };
  return (
    <Drawer anchor="left" variant="permanent" PaperProps={{ sx: DrawerStyle }}>
      <List sx={ListStyle}>
        {data.map((el) => {
          return (
            <ListItem
              key={el.id}
              sx={ListItemStyle}
              onClick={() => handleClick(el)}
            >
              <Grid container gap={"8px"}>
                <Typography>{el.cmc_rank}.</Typography>
                <Typography>{el.name}</Typography>
              </Grid>
              <Box sx={ImgBoxStyle}>
                <img src={el.logo} alt="crypto logo" />
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
