import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  menuTitle: string;
  menuPath: string;
}

interface Props {
  item: {
    name: string;
    title: string;
    path?: string;
    menuItems?: MenuItem[];
  };
}

export const HomepageMenu = ({ item }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    navigate(item?.path ?? "/");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button sx={{ color: "white" }} onClick={handleClick}>
        {item.title}
      </Button>
      {item.menuItems && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {item.menuItems.map((item) => (
            <MenuItem onClick={handleClose} key={item.menuTitle}>
              {item.menuTitle}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};
