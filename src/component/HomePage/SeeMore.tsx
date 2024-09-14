import Projects from "../../shared/image/ProjectDisplay.jpg";
import Service from "../../shared/image/ContactDisplay.jpg";
import CustomerImage from "../../shared/image/CutomersDisplay.jpg";
import { Stack, Grid, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const seeMoreItems = [
  { title: "銷售客戶群", image: CustomerImage, path: "/achivement" },
  { title: "實際專案", image: Projects, path: "/service" },
  { title: "服務詢問", image: Service, path: "/contact" },
];

export const SeeMore = () => {
  const navigate = useNavigate();
  const onClick = (path: string) => navigate(path);
  return (
    <Grid container bgcolor={"#ADADAD"}>
      {seeMoreItems.map((item) => (
        <Grid item xs={4}>
          <Stack p={"12px"}>
            <Typography fontSize={24}>{item.title}</Typography>
            <Box component={"img"} src={item.image} />
          </Stack>
          <Button style={{ color: "black" }} onClick={() => onClick(item.path)}>
            more
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
