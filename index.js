var index = 0;
var data_movies = movies[index];

var movie = function(data) {
    return React.createElement('div', { className: 'media border' },
        React.createElement('div', { className: 'media-left' },
            React.createElement('img', {
                className: 'media-object',
                alt: 'Pic of movie',
                src: data.Images[random(data)],
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

render();

document.getElementById('next').addEventListener('click', function() {
    (index === movies.length - 1)? index = movies.length - 1: ++index;
    data_movies = movies[index];
    render();
})

document.getElementById('prev').addEventListener('click', function() {
    (index === 0) ? index = 0: --index;
    data_movies = movies[index];
    render();
})

function render() {
    ReactDOM.render(movie(data_movies), document.getElementById('app'));
}

function random(data) {
    return Math.floor(Math.random() * data.Images.length);
}