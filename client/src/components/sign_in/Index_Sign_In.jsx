import React, { useState } from 'react';

import Input from '../common/input/Input';
import CustomButton from '../common/button/Custom_Button';
import Authentication from './authentication/Authentication';
import Wrapper from '../common/authWrapper/Wrapper';


import './indexSignIn.scss';

const IndexSignIn = () => {
  const [state, setState] = useState({ 
    email: '',
    password: ''
  });

  const { email, password } = state;

  const onChange = e => {
    setState({...state , [e.target.name]: e.target.value })
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log(email, password)
  }

  return (
    <Wrapper name='sign-in' title='Sign In'>
      <div className='form'>
        <form onSubmit={onSubmit}>
          <Input 
            name='email'
            value={email}
            onChange={onChange}
            type='email'
            label='email'
          />
          <Input 
            name='password'
            value={password}
            onChange={onChange}
            type='password'
            label='password'
          />
          <div className='submit'>
            <CustomButton  value='Sign in' type='submit' isClass='inverted' />
          </div>
          <Authentication />
        </form>
      </div>
    </Wrapper>
  )
};

export default IndexSignIn;