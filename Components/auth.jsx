import React from 'react'

export const isAuthenticated = () => {
    
    if (sessionStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  };
