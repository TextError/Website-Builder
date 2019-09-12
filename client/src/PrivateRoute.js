import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, auth, ...rest}) => (
  <Route 
    {...rest}
    render = {
      props => false === true ? 
        ( <Component {...props} /> ) : ( <Redirect to='/sign-in' /> )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);