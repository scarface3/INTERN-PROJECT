import React from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Card from "./components/UI/Card";
import ProfilePage from "./components/UI/Profilepage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <MainHeader />
      <Route path="/" component={ProfilePage} />
      <Route path="/order" component={Card} />
      <Route path="/profile_page" component={ProfilePage} />
    </Router>
  );
};

export default App;
