import { Box, Button, Stack } from "@mui/material";

const navbarItems = [
  { name: "home", title: "首頁" },
  { name: "intro", title: "公司簡介" },
  { name: "product", title: "產品介紹" },
  { name: "service", title: "售後服務" },
  { name: "achievement", title: "銷售實績" },
  { name: "contact", title: "聯絡我們" },
];

export const Navbar = () => {
  return (
    <>
      <Stack bgcolor={"	#0072E3"} width={"100%"} direction={"row"}>
        {navbarItems.map((item, index) => (
          <Button sx={{ color: "white" }} key={index}>
            {item.title}
          </Button>
        ))}
      </Stack>
      <Box height={"75vh"} />
    </>
  );
};
