import { Paper } from "@mui/material";
import { ReactNode } from "react";

export const MainWrapper = (props: { children: ReactNode }) => {
  return (
    <Paper sx={{ p: "30px 108px 70px", borderRadius: 0, mb: 32 }}>
      {props.children}
    </Paper>
  );
};
