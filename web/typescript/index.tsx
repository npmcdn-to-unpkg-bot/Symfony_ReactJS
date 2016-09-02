import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./Composants/Home";

import { Contact } from "./Composants/Contact";

ReactDOM.render(
    <Home/>,
    document.getElementById('home')
);

ReactDOM.render(
    <Contact/>,
    document.getElementById('contact')
);