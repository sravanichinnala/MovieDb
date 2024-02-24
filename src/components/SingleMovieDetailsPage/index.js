import {Component} from 'react'
import MovieDetails from './MovieDetails'
import CastDetails from './CastDetails'

class Index extends Component {
  state = {
    movieDetails: {},
    movieCastDetails: [],
    apiKey: '6d12d8c51590cd478561b8c0d68dc184',
    id: 933131,
  }
  getMovieDetails = async id => {
    try {
      const {apiKey} = this.state
      const urlPath = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      const response = await fetch(urlPath)
      const data = await response.json()
      this.setState({
        movieDetails: data,
      })
    } catch (e) {
      console.log(e)
    }
  }
  getCastDetails = async id => {
    try {
      const {apiKey} = this.state
      const urlPath = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
      const response = await fetch(urlPath)
      const data = await response.json()
      this.setState({
        movieCastDetails: data,
      })
    } catch (e) {
      console.log(e)
    }
  }
  componentDidMount() {
    const {id} = this.state
    this.getMovieDetails(id)
    this.getCastDetails(id)
  }
  render() {
    const {movieDetails, movieCastDetails} = this.state
    return (
      <>
        <MovieDetails movieDetails={movieDetails} />
        <CastDetails movieCastDetails={movieCastDetails} />
      </>
    )
  }
}

export default Index
