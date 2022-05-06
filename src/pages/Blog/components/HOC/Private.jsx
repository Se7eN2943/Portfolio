import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Private({ children}) {
  const location = useLocation();
  const { auth } = useSelector((state) => state.blogReducer)
  if (!auth) return <Navigate to="/sign-in" state={{ goingFrom: location }} />;
  return children;
}

export default Private;
