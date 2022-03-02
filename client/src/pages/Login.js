import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/Auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
<div>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/interviews">back to the homepage.</Link>
              </p>
            ) : (
              <main className="flex-row justify-center mt-4">
              <div className="col-10">
                <div className="card">
                  <h4 className="card-header bg-dark text-light p-2">Login</h4>
                  <div className="card-body">
              <><form onSubmit={handleFormSubmit}>
                <label for="exampleInputEmail1"
               class="form-label custom-form-usrn"><strong>Email Address:</strong></label>
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange} />
                    <br/>
                    <br/>
               <label for="exampleInputPassword1"
               class="form-label custom-form-usrn"><strong>Password:</strong></label>
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange} />
                    <br/>
                    <br/>
                    <button
                    className="btn btn-block btn-dark"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form><p>Not a member? <Link to="/Signup">Sign up here!</Link></p></>
                </div>
                </div>
                </div>
                </main>
                )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}

      </div>

  );
};

export default Login;

