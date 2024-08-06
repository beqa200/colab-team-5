import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import StartPage from "./pages/StartPage";
import SignIn from "./components/UserIconModal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/*" element={<Layout />}>
        <Route path="main" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
