import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";

const Signup = () => {
  const containerStyle = {
  
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundImage: `url('https://img.freepik.com/free-photo/solid-gray-concrete-textured-wall_53876-110803.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais')`, // Set the background image here
  backgroundSize: 'cover', 
  
  };

  const cardStyle = {
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  };

  const imageStyle = {
    height: '530px',
    width: '500px',
    borderRadius: '1rem 0 0 1rem',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: ' 2rem',
    color: 'black',
  };

  const boxStyle = {
    border: '1px solid #ccc',
    borderRadius: '1rem',
    padding: '2rem',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    width: '900px',
    height: '750px',
  };

  const inputStyle = {
    marginBottom: '1rem',
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
  };

  const buttonStyle = {
    width: '80%',
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      firstName === '' ||
      lastName === ''
    ) {
      alert('Please fill in all fields');
    } else {
      try {
        const response = await fetch('https://sasi-be.onrender.com/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
            firstName,
            lastName,
          }),
        });

        if (response.ok) {
          
          alert('Registration Successfully');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred during registration');
      }
    }
  };

  return (
    <div style={containerStyle}>
      
      <div style={boxStyle}>
        <div className="card" style={cardStyle}>
          <div className="col-md-6 col-lg-7 d-none d-md-block">
            <img
              src="https://img.freepik.com/free-vector/spices-herbs-tag-decorated-with-leaves-dill-basil-bay-powder-curry-paprika-realistic-illustration_1284-61200.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=sph"
              alt="signup form"
              className="img-fluid"
              style={imageStyle}
            />
          </div>
          <div className="col-md-7 col-lg-5 d-flex align-items-center">
            <div style={formStyle}>
              <form onSubmit={handleSignup} className="signup">
                <div className="mb-4">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    style={inputStyle}
                    required
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    style={inputStyle}
                    required
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
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
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={inputStyle}
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
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
                <div className="pt-1 mb-4">
                  <button style={buttonStyle} type="submit">
                    Sign Up
                  </button><br/><br/>
                  <p>Already have an account? <Link to="/login">Login</Link></p>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
