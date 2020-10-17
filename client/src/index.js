import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { StateProvider } from "./utils/StateProvider";
import reducer, { initialState } from "./utils/reducer";
import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faBuilding,
  faEnvelopeOpenText,
  faFeatherAlt,
  faUserShield,
  faSchool,
  faVoteYea,
  faBalanceScale,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faPhoneAlt,
  faBuilding,
  faEnvelopeOpenText,
  faFeatherAlt,
  faUserShield,
  faSchool,
  faVoteYea,
  faBalanceScale,
  faFingerprint
);

ReactDOM.render(
  <React.StrictMode>
    {/* initialstate and reducer are part of the context API */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
registerServiceWorker();
