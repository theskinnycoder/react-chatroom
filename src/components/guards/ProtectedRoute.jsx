import { Redirect, Route, useLocation } from 'react-router-dom'

import { useUser } from '../../hooks'

const ProtectedRoute = (props) => {
  const { path } = props
  const protectedRoutes = ['/login', '/confirm']

  const { user } = useUser()
  const location = useLocation()

  if (protectedRoutes.includes(path)) {
    return user?.handle ? (
      <Redirect to={location?.state?.from ?? '/'} />
    ) : (
      <Route {...props} />
    )
  } else {
    return user ? (
      <Route {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: path },
        }}
      />
    )
  }
}

export default ProtectedRoute
