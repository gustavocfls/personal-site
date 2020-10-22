import React from "react"


const Portfolio = () => {
    
       let portfolio
  
    
      portfolio = (
        <div className="portfolio">

            <div className="skills">

                <div className="skills-heading">
                    <h3>Minhas habilidades</h3>
                    <p>Através dos meus estudos, adquiri uma sólida compreensão dos conceitos de ciência da computação e desenvolvimento web, e dediquei muito do meu tempo livre para aplicar esses conceitos a cenários e aplicativos do mundo real.</p>
                </div>

                <div className="skills--content">
                    <row>
                        <p>Javascript ES6</p>
                        <p>HTML & CSS</p>
                    </row>

                    <row>
                        <p>React</p>
                        <p>SASS</p>
                    </row>

                    <row>
                        <p>React Native</p>
                        <p>Styled-Components</p>
                    </row>

                    <row>
                        <p>Git</p>
                        <p>PHP & SQL</p>
                    </row>
                </div>

            </div>

            <div className="projects">

                <div className="projects--heading">
                    <h3>No que eu tenho trabalhado</h3>
                    <p>Gosto de ficar ocupado e sempre ter um projeto em andamento. Dê uma olhada em alguns dos aplicativos, artigos e empresas às quais dedico meu tempo.</p>
                </div>


                <div className="projects--content">

                </div>
    
            </div>
        
        </div>



      )
 
  
    return (
      <div className="portfolio--section">        
            {portfolio}       
      </div>
    )
  }
  
  export default Portfolio

