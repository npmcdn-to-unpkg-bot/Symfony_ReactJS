// The article who's gonna show the informations

var Article = React.createClass({
    getInitialState() {
      return{data: []}
    },
    componentDidMount() {
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
    },
    render() {
        return (
            <div className="article_bloc">
                <h2 className="article_title">Un titre bien sympa !</h2>
                <p className="article_conten">
                    Oh mais peux-ton ajouter du Lorem Ipsum ? Non pas encore, regarde, Json arrive !
                </p>
            </div>
        );
    }
});

// The box who's gonna include the articles

var ArticleBox = React.createClass({
    render() {
        return(
          <div className="list_articles_bloc">
              <Article />
          </div>
        );
    }
});

// The body bloc of our page

var IndexBox = React.createClass({
    render() {
       return(
           <ArticleBox />
       );
    }
});

ReactDOM.render(
    <IndexBox/>,
    document.getElementById('home')
);