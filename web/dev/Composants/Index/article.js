import React from "react";

export class Article extends React.Component {
    static setState() {
        return{
            data: []
        }
    }
    loadArticles() {
        $.ajax({
            url: 'http://localhost/projets/symfony/ReactJS/React/web/app_dev.php/api/articles/get',
            method: "GET",
            cache: false,
            dataType: 'json',
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    componentDidMount() {
        this.loadArticles();
        setInterval(2000)
    }
    render() {
        return (
            <div className="card">
                <h2>Oh, regarde, un article !</h2>
                <p>Oh et maintenant du contenu ? Mais serait-ce React qui propulse tout ça ?</p>
            </div>
        )
    }
}