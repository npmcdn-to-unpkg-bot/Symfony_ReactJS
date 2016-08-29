import React from "react";
import { render } from "react-dom";

// Externals componants
import { Header } from "./Composants/header";


class Index extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Hello World !</h1>
            </div>
        );
    }
}

render(<Index/>, document.getElementById('home'));


