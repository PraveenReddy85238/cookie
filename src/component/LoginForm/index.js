import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    isErrorFound: false,
  }

  onChangeUsernameInput = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePasswordInput = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccessResponse = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailureResponse = errorMsg => {
    this.setState({
      errorMessage: errorMsg,
      isErrorFound: true,
    })
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      console.log(data.jwt_token)
      this.onSubmitSuccessResponse(data.jwt_token)
    } else {
      this.onSubmitFailureResponse(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMessage, isErrorFound} = this.state
    return (
      <div className="login-form-bg-container">
        <form className="form-container" onSubmit={this.onSubmitLoginForm}>
          <div className="website-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <div className="input-label-container">
            <div>
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <br />
              <input
                type="text"
                id="username"
                className="input"
                placeholder="username"
                value={username}
                onChange={this.onChangeUsernameInput}
              />
            </div>

            <div>
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <br />
              <input
                type="password"
                id="password"
                className="input"
                placeholder="password"
                value={password}
                onChange={this.onChangePasswordInput}
              />
            </div>
            <div className="btn-container">
              <button type="submit" className="btn">
                Login
              </button>
            </div>
            {isErrorFound ? <p className="error-msg">*{errorMessage}</p> : ''}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
