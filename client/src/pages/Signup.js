import React from 'react';

export default function Signup() {
    return (
        <main className="flex-row justify-center mb-4">
          <div className="col-12 col-lg-10">
            <div className="card">
              <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
              <div className="card-body">
                 
                  <form>
                    <input
                      className="form-input"
                      placeholder="Your username"
                      name="username"
                      type="text"
                    //   value={formState.name}
                    //   onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Your email"
                      name="email"
                      type="email"
                    //   value={formState.email}
                    //   onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="******"
                      name="password"
                      type="password"
                    //   value={formState.password}
                    //   onChange={handleChange}
                    />
                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                
              </div>
            </div>
          </div>
        </main>
      );

}