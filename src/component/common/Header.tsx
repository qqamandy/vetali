import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../shared/image/LogoWithName.png";

const iconStyle = {
  color: "white",
  fontSize: "27px",
};

export const Header = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      pt={"16px"}
    >
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={"16px"}
      >
        <Box component={"img"} src={Logo} height={50} width={150} />
        <Typography color="white" fontSize={30}>
          板式熱交換器
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={"8px"}>
        <i className="fa-brands fa-square-facebook" style={{ ...iconStyle }} />
        <i className="fa-brands fa-square-youtube" style={{ ...iconStyle }} />
      </Stack>
    </Stack>
  );
};
