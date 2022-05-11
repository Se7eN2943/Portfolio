import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { LOGOUT } from '../../../../redux/reducers/blogReducer'

function NonAuthHeader() {
  return (
    <div className="autoris-buttons">
      <Link to="/BlogApp/sign-in">
        <button className="sign-in-button">Sign in </button>
      </Link>
      <Link to="/BlogApp/sign-up">
        <button className="sign-up-button color-button">Sign Up</button>
      </Link>
    </div>
  )
}

function AuthHeader({ username, image }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className="autoris-block">
      <Link to="/BlogApp/new-article">
        <button className="create-button color-button">Create article </button>
      </Link>
      <div className="username">{username}</div>
      <div className="user-img">
        <Link to="/BlogApp/profile">
          <img src={image} alt="Profile IMG" />
        </Link>
      </div>
      <Link
        onClick={() => {
          localStorage.clear()
          dispatch(LOGOUT())
          navigate('/BlogApp/articles', { replace: true })
        }}
        to="/BlogApp/articles"
      >
        <button className="log-out-button color-button">Log Out</button>
      </Link>
    </div>
  )
}

function Header({ getAllArticles }) {
  const { username, image, auth } = useSelector((state) => state.blogReducer)
  return (
    <header>
      <Link to="/BlogApp/articles">
        <h6 onClick={getAllArticles}>Realworld Blog</h6>
      </Link>
      {auth ? (
        <AuthHeader
          getAllArticles={getAllArticles}
          image={image}
          username={username}
        />
      ) : (
        <NonAuthHeader />
      )}
    </header>
  )
}

export default Header
