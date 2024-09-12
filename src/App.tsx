import { Stack } from "@mui/material";
import { Header } from "./component/common/Header";
import { Footer } from "./component/common/Footer";
import { Navbar } from "./component/common/Navbar";

function App() {
  return (
    <Stack sx={{ height: "100vh" }} alignItems={"center"}>
      <Stack width={"80%"}>
        <Header />
        <Navbar />
      </Stack>

      <Footer />
    </Stack>
  );
}

export default App;
