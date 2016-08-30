import React from "react";

export class Article extends React.Component {
    getInitialState() {
        return{
            data: []
        };
    }
    componentDidMount() {
        $.ajax({
            url: 'http://localhost/projets/symfony/ReactJS/React/web/app_dev.php/api/articles/get',
            cache: false,
            dataType: 'json',
            success(data) {
                this.setState({data: data});
            }.bind(this)
        });
    }
    render() {
        return (
            <div className="card">
                {this.data}
                <h2>Oh, regarde, un article !</h2>
                <p>Oh et maintenant du contenu ? Mais serait-ce React qui propulse tout ça ?</p>
            </div>
        )
    }
}