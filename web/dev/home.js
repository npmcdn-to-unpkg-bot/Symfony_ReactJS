import React from "react";
import { render } from "react-dom";

import { ArticleBox } from "./Composants/Index/article_box";

class IndexBox extends React.Component {
    render() {
        return (
            <ArticleBox/>
        );
    }
}

render(<IndexBox/>, document.getElementById('home'));
