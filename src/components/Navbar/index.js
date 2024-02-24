import {NavLink} from 'react-router-dom'
import './index.css'
const Index = () => (
  <div className='navbar'>
    <div className='navbar-left'>
      <h1>movieDB</h1>
    </div>
    <div className='navbar-middle'>
      <input className='input-element' type='text' />
      <button className='button-element' type='button'>
        Search
      </button>
    </div>
    <div className='navbar-right'>
      <ul>
        <li>
          <NavLink to='/'>Popular</NavLink>
        </li>
        <li>
          <NavLink to='/top-rated'>Top Rated</NavLink>
        </li>
        <li>
          <NavLink to='/upcoming'>Upcoming</NavLink>
        </li>
      </ul>
    </div>
  </div>
)

export default Index
