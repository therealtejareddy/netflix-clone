const key = 'c5bf91db98967c6d08caa913f50328fc'

const requests = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    toprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    latest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    trending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
}

export default requests