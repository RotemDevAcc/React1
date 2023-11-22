import React from 'react';

import {Link, Outlet} from "react-router-dom";


function App() {

    
  return (
    <div>
        Welcome To The Automated Supermarket System.
        <br></br>
        <Link to="/">Home</Link>{" "}<br/>
        <Link to="/products">Products</Link>

        <Outlet />
    </div>
  );
}

export default App;
