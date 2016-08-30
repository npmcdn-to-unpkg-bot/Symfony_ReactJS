import React from "react";
import { render } from "react-dom";

import { HeaderBox } from "./Composants/Global/header";

class GlobalBox extends React.Component {
    render() {
        return (
            <HeaderBox/>
        );
    }
}

render(<GlobalBox />, document.getElementById('header'));