import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import PopularPage from './components/PopularPage'
import TopRatedPage from './components/TopRatedPage'
import UpcomingPage from './components/UpcomingPage'
import SingleMovieDetailsPage from './components/SingleMovieDetailsPage'

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={PopularPage} />
      <Route path="/top-rated" component={TopRatedPage} />
      <Route path="/upcoming" component={UpcomingPage} />
      <Route path="/movie/check" component={SingleMovieDetailsPage} />
    </Switch>
  </Router>
)

export default App
