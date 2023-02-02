import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Pills from "./views/Pills";
import Menu from "./components/Menu";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div style={{ height: "100%" }}>
      {isLoggedIn && <Menu />}
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
