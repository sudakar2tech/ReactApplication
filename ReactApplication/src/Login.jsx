import React, { useState } from 'react';
import './Login.css';
import { BrowserRouter,useNavigate, Routes , Route} from "react-router-dom";
import axios from 'axios';


const Login = () => {
  // State management for form inputs
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [role , setRole] = useState('');

   const handleRedirect = async(e) => {
    e.preventDefault();
  try
  {
       

      const response =  await axios.post('http://localhost:5000/api/Employee/login?ename=' + employeeName);
      if(response.data.role === 'Admin') {
        navigate('/Home', { replace: true });
      }
      if(response.data.role === 'Manager') {
        navigate('/Manager', { replace: true });
      }
      if(response.data.role === 'User') {
        navigate('/User', { replace: true });
      }

    }

  catch (error) {
    alert('Invalid username or password:');
  } 
  };
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific field errors when user typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Form validation logic
  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } 

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {

    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Employee Name</label>
            <input
              type="text"             
              placeholder="Employee Name"
              value={employeeName}
              onChange={(e) => {
                const { value } = e.target;
                setEmployeeName(value);
              }}
             
            />
           
          </div>

          {/* Password Field */}
          <div className="form-group">
            <div className="label-wrapper">
              <label htmlFor="password">Password</label>
              <a href="#forgot" className="forgot-link">Forgot password?</a>
            </div>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'input-error' : ''}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          {/* Submit Button */}
        
  
          <button type="submit" className="submit-btn" onClick={handleRedirect} disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
       
 
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="#signup">Sign up for free</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;