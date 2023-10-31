import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; 
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
      const response = await fetch('https://sasi-be.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
  
        alert('Login Successful');
        navigate('/Lhome');
      } else {
        // Handle login failure
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle other errors
      alert('An error occurred during login.');
    }
  };
  

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('https://img.freepik.com/premium-photo/ultra-hd-4k-blue-abstract-background-desktop-wallpaper_963876-1323.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais')`,
    backgroundSize: 'cover',
  };

  const cardStyle = {
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    width: '400px',
    minHeight: '300px',
    padding: '2rem',
    color: 'black',
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1rem',
  };

  const inputStyle = {
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
    width: '100%',
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
  };

  

  

  return (
    <div>
    <Header/>
  
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div className="col-md-12">
          <h3 className="card-title text-center">
            <img
              src="https://img.freepik.com/premium-vector/3d-add-user-icon-create-group-symbol-new-profile-account-people-icon-plus-avatar-human-person-people-icon-trendy-modern-vector-3d-style_175838-3700.jpg?size=626&ext=jpg&ga=GA1.2.455358885.1692768358&semt=ais"
              alt="Logo"
              width="100"
            />
          </h3>
          <form onSubmit={handleLogin} className="login">
            <div style={inputContainerStyle}>
              <i className="ri-user-fill" style={iconStyle}></i>
              <input
                type="text"
                id="username"
                name="username"
                style={inputStyle}
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div style={inputContainerStyle}>
              <i className="fa fa-lock" style={iconStyle}></i>
              <input
                type="password"
                id="password"
                name="password"
                style={inputStyle}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />{' '}
                Remember Me
              </label>
            </div>
           
            <div className="mb-3 text-center">
              <button style={buttonStyle} type="submit">
                Login
              </button>
            </div>
            <p className="text-center">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Login;
