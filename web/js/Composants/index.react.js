var Hello = React.createClass({
   render() {
       return(
           <h1>hello World !</h1>
       );
   }
});

ReactDOM.render(
    <Hello />,
    document.getElementById('home')
);