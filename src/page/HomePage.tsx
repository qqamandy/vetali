import { Stack } from "@mui/material";
import { ServiceExample } from "../component/HomePage/ServiceExample";
import { SeeMore } from "../component/HomePage/SeeMore";

export const HomePage = () => {
  return (
    <Stack >
      <ServiceExample />
      <SeeMore />
    </Stack>
  );
};
