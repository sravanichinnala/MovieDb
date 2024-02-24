const index = props => {
  const {
    title,
    poster_path: posterPath,
    vote_average: rating,
    genres,
    release_date: releaseDate,
    overview,
    runtime: duration,
  } = props.movieDetails
  return (
    <div className="movie-details-section">
      <h2>Movie Details</h2>
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      </div>
      <div className="movie-details">
        <h3>{title}</h3>
        <span>{rating}</span>
        <span>{releaseDate}</span>
        <span>{duration}</span>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default index
