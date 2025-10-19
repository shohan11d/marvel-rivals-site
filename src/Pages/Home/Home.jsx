import Feed from '../../Components/Feed/Feed'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'

import React from 'react'

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar ? " " : "large-container"}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home
