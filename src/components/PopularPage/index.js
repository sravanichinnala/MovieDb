import {Component} from 'react'
import MoviesPage from '../MoviesPage'
import './index.css'

class Index extends Component {
  state = {
    page: 1,
  }
  render() {
    const {page} = this.state
    return <MoviesPage page={page} moviesType="popular" />
  }
}

export default Index
