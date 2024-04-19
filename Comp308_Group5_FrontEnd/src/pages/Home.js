import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Health Monitoring System</h1>
            <p>Get updates regarding health</p>
            <div className="login-register">
                <Link to="/login" className="button-link">Login</Link>
                <Link to="/login?register=true" className="button-link">Register</Link>
            </div>
        </div>
    );
};

export default Home;
