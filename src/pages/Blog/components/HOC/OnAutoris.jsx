import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

function OnAutoris({ children }) {
  const location = useLocation();
  const { auth } = useSelector((state) => state.blogReducer)
  const fromPage = location?.state?.goingFrom?.pathname || '/articles';
  if (auth) return <Navigate to={fromPage} state={{ goingFrom: location }} />;
  return children;
}

export default OnAutoris;
