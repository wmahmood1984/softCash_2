import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LaunchPadList from "./screens/LaunchPadList";
import ProjectPreview from "./screens/ProjectPreview";
import CreateToken from "./screens/CreateToken";
import CreatePresale from "./screens/CreatePresale";
import CreateLock from "./screens/CreateLock";
import LockList from "./screens/LockList";
import LockDetails from "./screens/LockDetails";
import LockRecord from "./screens/LockRecord";
function App() {
  const queryClient = new QueryClient();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#c22026",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Toaster containerClassName="text-sm" />
          <Routes>
            <Route element={<Home />} index />
            <Route element={<LaunchPadList />} path="launchpad_list" />{" "}
            <Route element={<ProjectPreview />} path="project_preview" />
            <Route element={<CreateToken />} path="create_token" />
            <Route element={<CreatePresale />} path="create_presale" />{" "}
            <Route element={<CreateLock />} path="create_lock" />
            <Route element={<LockList />} path="lock_list" />
            <Route element={<LockDetails />} path="lock_details" />
            <Route element={<LockRecord />} path="lock_record" />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
