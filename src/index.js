import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import base, { auth, providers } from "./base";

ReactDOM.render(
  <App base={base} auth={auth} providers={providers} />,
  document.getElementById("root")
);
