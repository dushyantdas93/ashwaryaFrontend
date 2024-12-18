import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Changed Children to children
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  axios.defaults.headers.common["Authorization"] = auth?.token
  useEffect(() => {
    const data = localStorage.getItem("auth")
    if (data) {
      
      const parseData = JSON.parse(data)
      // console.log("paserdata:",parseData);
       setAuth({ ...auth, user: parseData.user, token: parseData.token });
    }
    // eslint disable next line 
  },[])
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children} 
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider }; 
