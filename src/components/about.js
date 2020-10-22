import React from "react"


const About = () => {
    
       let about
  
    
      about = (
        <div className="about--content">

            <div className="photo--about"></div>

            <h3 className="main-heading">
            As I've grown as a developer, I've worked alongside senior designers and developers who have raised my standards for whats expected of any web application
        
            </h3>
        
        </div>
      )
 
  
    return (
      <div className="about-section">        
            {about}       
      </div>
    )
  }
  
  export default About

