
import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({children}) => {
  if (localStorage.getItem("token") === null) {
    return <Navigate to={"/signin"} />;
  } else {
    return children;
  }
};

export default ProtectedRoutes;
















// import React from 'react'
// import { Navigate } from 'react-router-dom'


// export default function ProtectedRoutes({children}) {
   
//  const token = localStorage.getItem("token")


//   if (token === null) {
//     return <>
//       <Navigate to={"/Signin"} />
//     </>
// }

// return <>

// {children}
// </>
//   }