import React from "react";

import { Article } from "./article";

export class ArticleBox extends React.Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Article/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
