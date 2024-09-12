import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../shared/image/LogoWithName.png";

export function Footer() {
  return (
    <Stack
      bgcolor={"#4d4c4c"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      p={"16px "}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"32px"}>
        <Box component={"img"} src={Logo} />
        <Stack>
          <Typography color="white">維特利有限公司</Typography>
          <Typography color="white">Veitali Enterprise CO LTD</Typography>
        </Stack>
        <Stack>
          <Typography color="white" fontSize={"12px"}>
            地址: 32047 台灣桃園市中壢區新明路143號
          </Typography>
          <Typography color="white" fontSize={"12px"}>
            電話:+886-3-4942272 傳真:+886-3-4929505
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography color="white" fontSize={"12px"}>
          Copyright© 2016 VEITALI HEAT EXCHANGER
        </Typography>
      </Stack>
    </Stack>
  );
}
