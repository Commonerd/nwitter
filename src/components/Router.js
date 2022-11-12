import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //eslint-disable-line no-unused-vars
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" exact element={<Home />} />
        ) : (
          <Route path="/" exact element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;