var index = 0;
var data_movies = movies[index];

var movie = function(data) {
    return React.createElement('div', { className: 'media border' },
        React.createElement('div', { className: 'media-left' },
            React.createElement('img', {
                className: 'media-object',
                alt: 'Pic of movie',
                src: data.Images[0],
                height: 200,
                width: 300
            })
        ),
        React.createElement('div', { className: 'media-body' },
            React.createElement('h2', { className: 'media-heading' }, data.Title),
            React.createElement('p', {}, data.Plot)
        )
    )
}

ReactDOM.render(movie(data_movies), document.getElementById('app'));