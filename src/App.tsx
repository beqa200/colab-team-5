import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />

      <Route path="/*" element={<Layout />}>
        <Route path="main" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
