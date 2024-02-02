import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { darkThemeColors } from "./styles/Theme";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/homepage/Homepage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<Homepage />}
        />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={darkThemeColors}>
      <RouterProvider router={router} />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
