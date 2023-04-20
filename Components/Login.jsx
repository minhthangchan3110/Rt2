import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useNavigate } from "react-router-dom";
import { isAuthenticated } from './auth';
export default function Login() {
    const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Login Page</h1>
    
    </div>
  );
  
}
