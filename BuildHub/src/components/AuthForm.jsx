import React, { useState } from 'react';
import './AuthForm.css'; // Assuming CSS file is AuthForm.css
import { AdminPanel } from './Admin/Admin';

function AuthForm() {
  const [isLoginMode, setIsLoginMode] = useState(true); // Initially display login form
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrorMessage(''); // Clear error message on form change
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isLoginMode) { // Login
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const foundUser = storedUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (foundUser) {
        setIsLoggedIn(true);
        localStorage.setItem('loggedIn', true); // Set login state
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid email or password');
      }
    } else { // Signup
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = storedUsers.find((user) => user.email === formData.email);

      if (existingUser) {
        setErrorMessage('Email already exists');
      } else {
        const newUsers = [...storedUsers, { ...formData }];
        localStorage.setItem('users', JSON.stringify(newUsers));
        setFormData({ email: '', password: '' }); // Clear form after signup
        setErrorMessage('Signup successful!');
      }
    }
  };

  const toggleFormMode = () => {
    setIsLoginMode((prev) => !prev); // Switch between login and signup
  };

  return (
    <div className="login-form-container">
      {isLoggedIn ? (
        //  <Link to="/admin">Signin/Signup</Link>
      getAlart('login successfull')
         
      ) : (
        <form onSubmit={handleSubmit}>
          {isLoginMode ? (
            <>
              <h2 className="form-title">Login</h2>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                required
              />
            </>
          ) : (
            <>
              <h2 className="form-title">Sign Up</h2>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                required
              />
            </>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="form-button">
            {isLoginMode ? 'Login' : 'Sign Up'}
          </button>
          <p className="form-toggle">
            {isLoginMode ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button type="button" onClick={toggleFormMode} className="toggle-button">
              {isLoginMode ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </form>
      )}
    </div>
  );
}

export default AuthForm;