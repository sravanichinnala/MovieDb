import './index.css'
const Index = props => {
  const {
    poster_path: posterPath,
    title,
    vote_average: rating,
    id,
  } = props.movieDetails
  return (
    <div className="movie-poster-card">
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      <h3>{title}</h3>
      <p>{rating}</p>
      <button type="button">View Details</button>
    </div>
  )
}

export default Index
