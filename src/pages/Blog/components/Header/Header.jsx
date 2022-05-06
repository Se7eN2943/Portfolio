import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { LOGOUT } from '../../../../redux/reducers/blogReducer'

function NonAuthHeader() {
  return (
    <div className="autoris-buttons">
      <Link to="sign-in">
        <button className="sign-in-button">Sign in </button>
      </Link>
      <Link to="sign-up">
        <button className="sign-up-button color-button">Sign Up</button>
      </Link>
    </div>
  );
}

function AuthHeader({ username, image }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <div className="autoris-block">
      <Link to="new-article">
        <button className="create-button color-button">Create article </button>
      </Link>
      <div className="username">{username}</div>
      <div className="user-img">
        <Link to="profile">
          <img src={image} alt="Profile IMG" />
        </Link>
      </div>
      <Link
        onClick={() => {
          localStorage.clear();
          dispatch(LOGOUT());
          navigate('/articles', { replace: true });
        }}
        to="/"
      >
        <button className="log-out-button color-button">Log Out</button>
      </Link>
    </div>
  );
}

function Header({ getAllArticles }) {
  const { username, image, auth } = useSelector((state) => state.blogReducer)
  return (
    <header>
      <Link to="/articles">
        <h6 onClick={getAllArticles}>Realworld Blog</h6>
      </Link>
      {auth ? (
        <AuthHeader getAllArticles={getAllArticles} image={image} username={username} />
      ) : (
        <NonAuthHeader />
      )}
    </header>
  );
}

export default Header;
