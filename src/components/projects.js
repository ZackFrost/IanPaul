import React from "react";
import { CUSTOM_GRADIENT_COLOR } from "../utils/color_utils";
import { projectsMap } from "../utils/project_utils";
import ProjectSectionCard from "./project_section_card";

const Projects = () => {
  return (
    <div
    id="projects_section"
    style={{ padding:"80px 0px 80px 0px"}}
  >
    <div className="container">
      <div className="row">
        <div
          style={{
            paddingBottom: "70px",
            textAlign: "center",
          }}
        >
          <h1 style={{
            fontWeight: 700,
            fontSize: "48px",
            textAlign: "center",
            color: "#000"
          }}>Projects</h1>
          <h5 style={{fontSize:"15px"}}>Personal & Freelance</h5>
        </div>
        <div className="row">
          {/* <ProjectCard/> */}
        {projectsMap.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6" style={{}}>
              <ProjectSectionCard
                platform={service.platforms}
                title={service.title}
                description={service.descritpion}
                image={service.image}
              />
            </div>
          ))}
        </div>
       
          
      </div>
    </div>
  </div>
    // <div
    //   id="projects_section"
    //   style={{ backgroundImage: CUSTOM_GRADIENT_COLOR , padding:"80px 0px 80px 0px"}}
    // >
    //   <div className="container">
    //     <div className="row">
    //       <div
    //         style={{
    //           paddingBottom: "70px",
    //           textAlign: "center",
    //           color: "white",
    //         }}
    //       >
    //         <h1 style={{
    //           fontWeight: 700,
    //           fontSize: "48px",
    //           textAlign: "center",
    //           color: "white"
    //         }}>Projects</h1>
    //         <h5 style={{fontSize:"15px"}}>Personal & Freelance</h5>
    //       </div>

    //       <div className="row">
    //         {projectsMap.map((service, index) => (
    //           <div key={index} className="col-3">
    //             <ProjectSectionCard
    //               platform={service.platforms}
    //               title={service.title}
    //               description={service.descritpion}
    //               image={service.image}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Projects;
