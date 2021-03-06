import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.access_token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    // console.log("userToken:", userToken);
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  const removeToken = () => {
    // console.log("userToken:", userToken);
    localStorage.removeItem('token');
    setToken(null);
  };


  return {
      setToken: saveToken,
      token,
      removeToken: removeToken,
  }
}