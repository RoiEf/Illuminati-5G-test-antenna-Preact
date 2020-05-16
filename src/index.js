import { h, render } from "preact";
// import { useState } from "preact/hooks";
import { Router } from "preact-router";

import Home from "./routes/home";

const App = () => {
  // const [user, setUser] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [isAutenticated, setIsAutenticated] = useState(false);

  // const updateAuthData = (obj) => {
  //   setUser(obj.user);
  //   setPassword(obj.password);
  //   setIsAutenticated(true);
  // };

  return <div id="app">Some Text</div>;
};

render(<App />, window.preact_root);
