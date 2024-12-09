import React from "react";


import { useAuth } from "./context/auth";
// import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
  const [auth] = useAuth()

  // const navigate = useNavigate()



   if (!auth?.token) {
     return <Home/>
   }
  return (

    <div className="container bg-blue-300 ">
      this is admin
      </div>
   
   
  );
};

export default App;
