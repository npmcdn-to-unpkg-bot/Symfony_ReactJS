import React from "react";
import { render } from "react-dom";

import { ArticleBox } from "./Composants/article_box";

class IndexBox extends React.Component {
    render() {
        return (
            <ArticleBox/>
        );
    }
}

render(<IndexBox />, document.getElementById('home'));
