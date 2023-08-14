import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-bg-container">
      <h1 className="home-heading">Find the job thats fits your life</h1>
      <p className="home-description">
        millions of people searching fro jobs, salary information,company
        reviews.find the jobs thats fits your abilities and potentials{' '}
      </p>
      <Link to="/jobs">
        <button type="button" className="find-job-btn">
          Find Jobs
        </button>
      </Link>
    </div>
  </>
)

export default Home
