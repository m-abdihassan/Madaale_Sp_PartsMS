import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './Login.css';
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      console.log("Sending login request with data:", formData);
      const response = await axios.post('http://localhost:8080/api/Users/login', formData);
      console.log("Received response:", response.data);
      const { data } = response;
      if (data.message === 'Username Not exist') {
        alert('Username does not exist');
      } else if (data.message === 'Login Success') {
        navigate("/OverviewPage");
      } else {
        alert('Incorrect username or password');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Login</h2>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={login}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
