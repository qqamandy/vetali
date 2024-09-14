import { Stack } from "@mui/material";
import { HomepageMenu } from "./HomepageMenu";

const navbarItems = [
  { name: "home", title: "首頁", path: "/" },
  { name: "intro", title: "公司簡介", path: "/intro" },
  {
    name: "product",
    title: "產品介紹",
    path: "/product",
    menuItems: [
      { menuTitle: "板式熱交換器結構特性", menuPath: "" },
      { menuTitle: "組合型板式熱交換器", menuPath: "" },
      { menuTitle: "硬銲型板式熱交換器", menuPath: "" },
    ],
  },
  { name: "service", title: "售後服務", path: "/service" },
  { name: "achievement", title: "銷售實績", path: "/achievement" },
  { name: "contact", title: "聯絡我們", path: "/contact" },
];

export const Navbar = () => {
  return (
    <>
      <Stack
        bgcolor={"	#0072E3"}
        width={"100%"}
        direction={"row"}
        justifyContent={"center"}
        spacing={1}
      >
        {navbarItems.map((item, index) => (
          <HomepageMenu item={item} key={index} />
        ))}
      </Stack>
    </>
  );
};
