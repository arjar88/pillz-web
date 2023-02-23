import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./views/Login";
import Pills from "./views/Pills";
import Menu from "./components/Menu";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { user } = useSelector((state) => state.user);

  return (
    <div style={{ height: "100%" }}>
      {user && <Menu />}
      <Routes>
        <Route
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path="/pills" element={<Pills />}></Route>
      </Routes>
    </div>
  );
}

export default App;
