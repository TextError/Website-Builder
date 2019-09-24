import { ACCOUNT, ALERT, POST } from './types';
// import axios from 'axios';
// import URL from '../../utils/URL';

export const register = (data, history) => dispatch => {
  dispatch({
    type: ACCOUNT.REGISTER_USER,
    payload: true
  })
  history.push('/sign-in')
};

export const alert = () => {
  return { 
    type: ALERT.HIDE_MESSAGE
  };
};

export const signIn = data => dispatch => {
  dispatch({
    type: ACCOUNT.SIGN_IN_USER,
    payload: {
      user: {
        id: '1',
        name: 'Jhon Snow',
        email: 'Jhonsnow@gmail.com',
      },
      isAuth: true,
    }
  })
}

export const savePost = (data, history) => dispatch => {
  dispatch({
    type: POST.SAVE,
    payload: data
  })
  // history.push('/')
};

export const editPost = data => dispatch => {
  dispatch({
    type: POST.EDIT,
    payload: data
  })
}