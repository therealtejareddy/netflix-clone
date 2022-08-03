const key = process.env.REACT_APP_TDMB_KEY

const requests = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    toprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    latest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    trending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
}

export default requests