import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import SignIn from './pages/sign_In/SignIn';
import Register from './pages/register/Register';
import Footer from './layout/footer/Footer';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/not_Found/NotFound';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/register' component={Register} />

          <PrivateRoute exact path='/dashboard' component={Dashboard} />

          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;