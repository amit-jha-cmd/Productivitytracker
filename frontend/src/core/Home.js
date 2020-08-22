import React,{useEffect,useState} from 'react';

import NavBar from './Navbar'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/Home.css'
const Home = () =>{

  return(
    <div>
      <NavBar/>
      <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://quotefancy.com/media/wallpaper/3840x2160/183644-Robin-S-Sharma-Quote-Productivity-is-less-about-what-you-do-with.jpg"
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1543616991-75a2c125ff5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.lifehack.org/wp-content/uploads/2014/05/productivity-quotes-1024x768.jpeg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
    
    
    </div>
      
      
      
    </div>

)
}

export default Home;
