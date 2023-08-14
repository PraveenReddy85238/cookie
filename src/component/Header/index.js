import {FcHome} from 'react-icons/fc'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = () => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
  }
  return (
    <nav className="header-bg-container">
      <div className="mobile-view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <div>
          <FcHome className="home-logo" />
          <BsFillBriefcaseFill className="briefcaseFill-logo" />
          <button type="button" className="mobile-view-logout-btn">
            <FiLogOut className="logout-logo" onClick={onClickLogout()} />
          </button>
        </div>
      </div>
      <div className="large-screens-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="home-job-container">
          <Link to="/">
            <p className="home">Home</p>
          </Link>
          <Link to="/job">
            <p className="job">Jobs</p>
          </Link>
        </div>
        <button type="button" className="large-screen-logout-btn">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
