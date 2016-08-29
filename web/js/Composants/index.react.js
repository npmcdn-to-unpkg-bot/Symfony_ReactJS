// The article who's gonna show the informations

var Article = React.createClass({
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