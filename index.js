var movie = movies.map(function(movie) {
    return React.createElement('div', { className: 'media border', key: movie.Id },
        React.createElement('div', { className: 'media-left' },
            React.createElement('img', {
                className: 'media-object',
                alt: 'Pic of movie',
                src: movie.Images[1],
                height: 200,
                width: 300
            })
        ),
        React.createElement('div', { className: 'media-body' },
            React.createElement('h2', { className: 'media-heading' }, movie.Title),
            React.createElement('p', {}, movie.Plot)
        )
    )
})

render();

function render() {
    ReactDOM.render(movie, document.getElementById('app'));
}