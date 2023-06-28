import React from 'react'
import "./Home.scss"
import Sidebar from '../../components/sidebar/Sidebar'


export const Home = () => {
  return (
    <div className="home">
        <Sidebar /> 
        <div className="homeContainer">Container</div>
    </div>
    
  )
}
export default Home