var HeaderBox = React.createClass({
   render() {
       return(
           <p>Du texte !</p>
       );
   }
});

ReactDOM.render(
    <HeaderBox />,
    document.getElementById('header')
);