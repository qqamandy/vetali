import { Stack } from "@mui/material";
import { Header } from "./component/common/Header";
import { Footer } from "./component/common/Footer";
import { Navbar } from "./component/common/Navbar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { IntroPage } from "./page/IntroPage";
import { ServicePage } from "./page/ServicePage";
import { ContactPage } from "./page/ContactPage";

function App() {
  return (
    <Stack sx={{ height: "100vh" }} alignItems={"center"}>
      <Stack width={"80%"} spacing={2}>
        <Header />
        <Navbar />
      </Stack>
      <Stack width={"80%"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/product" />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Stack>

      <Footer />
    </Stack>
  );
}

export default App;
