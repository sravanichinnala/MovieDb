import {Component} from 'react'
import MoviesPosterCard from '../MoviePosterCard'
import './index.css'

class Index extends Component {
  state = {
    moviesList: [],
    apiKey: '6d12d8c51590cd478561b8c0d68dc184',
    pageStatus: 'initial',
  }

  getMovies = async page => {
    const {apiKey} = this.state
    const {moviesType} = this.props
    const urlPath = `https://api.themoviedb.org/3/movie/${moviesType}?api_key=${apiKey}&language=en-US&page=${page}`
    try {
      const response = await fetch(urlPath)
      const data = await response.json()
      this.setState({
        moviesList: data.results,
        pageStatus: 'renderSuccess',
      })
    } catch (e) {
      this.setState({
        pageStatus: 'renderFailure',
      })
      console.log(e)
    }
  }

  renderSuccess = () => {
    const {moviesList} = this.state
    const renderData = moviesList.map(item => {
      return <MoviesPosterCard movieDetails={item} key={item.id} />
    })
    return <div className="all-movies">{renderData}</div>
  }

  renderFailure = () => <div>Movies Not Found</div>

  loading = () => <div> Loading </div>
  componentDidMount() {
    const {page} = this.props
    this.getMovies(page)
  }
  render() {
    const {pageStatus: status} = this.state
    switch (status) {
      case 'initial':
        return this.loading()
        break
      case 'renderSuccess':
        return this.renderSuccess()
        break
      case 'renderFailure':
        return this.renderFailure()
        break
      default:
        return null
    }
  }
}

export default Index
