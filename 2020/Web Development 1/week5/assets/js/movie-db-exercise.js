//118 Movie Database Exercise
// Create an array of movie objects. Each movie should have a title, rating, and hasWatched Properties. Iterate through the array and print out something that looks like:
//You have watched "In Bruges" - 5 stars

let movies = [{
        title: "Halloween",
        hasWatched: true,
        rating: 3.5
    },

    {
        title: "A Nightmare on Elm Street",
        hasWatched: false,
        rating: 5
    },

    {
        title: "Friday the 13th",
        hasWatched: false,
        rating: 4.5
    }

]


movies.forEach(function (movie) {
    let results = 'You have ';
    if (movie.hasWatched) {
        results += `watched`;
    } else {
        results += `not seen`;
    }

    results += ` "${movie.title}" - `;
    results += `${movie.rating} stars`;
    console.log(results)

});


function buildString(movie) {
    let results = 'You have ';
    if (movie.hasWatched) {
        results += `watched`;
    } else {
        results += `not seen`;
    }

    results += ` "${movie.title}" - `;
    results += `${movie.rating} stars`;
    return results;
}

movies.forEach(function (movie) {
    console.log(buildString(movie));
});