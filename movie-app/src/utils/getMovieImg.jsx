import placeholder from "../img/placeholder.png"
export function getMovieImg(path, width){
    return path? `http://image.tmdb.org/t/p/w${width}${path}`:placeholder


}

//const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;