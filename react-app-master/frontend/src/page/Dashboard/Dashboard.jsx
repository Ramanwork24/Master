import React from 'react'
import Header from "../../components/header/Header";

import Sidebar from '../../components/Sidebar/Sidebar';


function Dashboard()


{
  return (
    <div>
      <div className="header" id="header">
      <Header />
      </div>
      <div className="slider">
      <Sidebar />
      </div>
    </div>
  )
}

export default Dashboard;
