import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {StateProvider} from './utils/StateProvider'
import reducer, {initialState} from './utils/reducer'

ReactDOM.render(
<React.StrictMode>
    {/* initialstate and reducer are part of the context API */}
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />,
    </StateProvider>
</React.StrictMode>,

    document.getElementById("root"));
registerServiceWorker();
