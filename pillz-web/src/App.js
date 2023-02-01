import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import MainScreen from "./views/MainScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/MainScreen" element={<MainScreen />}></Route>
    </Routes>
  );
}

export default App;
