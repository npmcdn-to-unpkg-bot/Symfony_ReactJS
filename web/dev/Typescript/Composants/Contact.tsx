import * as React from "react";

export interface ContactProps {}

export class Contact extends React.Component <ContactProps, {}> {
    render() {
        return <div>
                    <p>Voici la page de contact qui prend vie !</p>
               </div>
    }
}