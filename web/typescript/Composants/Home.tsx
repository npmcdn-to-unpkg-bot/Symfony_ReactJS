import * as React from "react";

import { Data } from "../Object/Data";

export interface HomeProps {}

export class Home extends React.Component<HomeProps, {}> {
    render() {
        var data = new Data("http://localhost/projets/symfony/ReactJS/React/web/app_dev.php/api/articles/get");
        return <div>
                <h1>hello World ! </h1>
                <p>Oh mais serait-ce ? Mais oui, voici du Typescript compilé en ReactJS !</p>
               </div>;
    }
}