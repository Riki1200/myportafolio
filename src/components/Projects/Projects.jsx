import React, { useEffect, useState, useRef,createContext} from "react";

import { project } from "./../api/proyects";
import {
  SectionProjects,
  ProjectsContent,
  ProjectsCard,

} from "../styleComponents/index";
import '../../styles/scss/_projects.scss'

export const ContextModal = createContext();


const Projects = ({ p }) => {
  const [projects, setProjects] = useState([]);
 
 
  const refElement = useRef({element: null})
  useEffect(() => {
    setProjects(project);
    
    return () => {};
  }, [projects,refElement ]);




  return (
   
      <SectionProjects className="main_section--content">
        <ProjectsContent className='projects_content'>
          {projects.map(({ nameapp, url, createDate, initImage, tech, imageurl, details }, index) => (
           
            <ProjectsCard key={index} className='project_item'>
              <div className="proyect_c" >
                
                <picture className='picture'>
                    {tech.length > 0 ? tech.map((v,index) => (
                      <img width="40px" src={v} alt={v} key={index}/>
                    )) : null}
                </picture>
                  
                  <img
                  
                    
          
                    alt={nameapp}
                    src={initImage !== "" ? initImage : "/images/bgtest.png" }
                /> 
                
                <h1 className="title_app">{nameapp}</h1>
              </div>
              <div className="redirect_p">
                <a title={nameapp} href={url} target="__blank">
                  {nameapp} {"\n"}
                  <img
                    src="/images/icons/enlace.png"
                    alt={nameapp}
                    width="20"
                    loading="lazy"
                  />
                </a>
          
              </div>
            </ProjectsCard>
            
              
            
          ))}
          
             

           
        </ProjectsContent>
      </SectionProjects>
    
    
  );
};

export default Projects;
