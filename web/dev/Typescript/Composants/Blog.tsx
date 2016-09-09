import * as React from "react";

export interface BlogProps {}

export class Blog extends React.Component <BlogProps, {}> {

    public article: string[];

    render() {
        return (
            <div>
                <p>Un futur roman en devenir !</p>
            </div>
        )
    }
}