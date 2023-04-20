import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from './auth';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Home Page</h1>
      {/* Nội dung trang chủ */}
    </div>
  );
}

export default HomePage;
