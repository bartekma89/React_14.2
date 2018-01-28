var movieElements = movies.map(function(movie) {
    return React.createElement('li', {key:movie.Id},
        React.createElement('h2', {}, movie.Title),
        React.createElement('p', {}, movie.Plot)
    )
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmow'),
    React.createElement('ul', {}, movieElements)
);

ReactDOM.render(element, document.getElementById('app'));