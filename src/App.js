import { BrowserRouter as Router, Switch } from 'react-router-dom';

import ProtectedRoute from './components/guards/ProtectedRoute';
import AuthProvider from './contexts/AuthContext';
import { MainLayout } from './layouts';
import { ChatRoomPage, ConfirmAuthPage, LoginPage } from './pages';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MainLayout>
          <Switch>
            <ProtectedRoute exact path='/' component={ChatRoomPage} />
            <ProtectedRoute exact path='/login' component={LoginPage} />
            <ProtectedRoute exact path='/confirm' component={ConfirmAuthPage} />
          </Switch>
        </MainLayout>
      </Router>
    </AuthProvider>
  );
};

export default App;
