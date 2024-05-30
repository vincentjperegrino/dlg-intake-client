import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    expiresIn: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expiresIn');

    if (token && expiresIn && new Date().getTime() < expiresIn) {
      setAuth({ token, expiresIn });
    }
  }, []);

  const authLogin = (token, expiresIn) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expiresIn);
    setAuth({ token, expiresIn });
  };

  const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    setAuth({ token: null, expiresIn: null });
  };

  return (
    <AuthContext.Provider value={{ auth, authLogin, authLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
