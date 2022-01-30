import React from "react";

import ProjectStackListObject from "./ProjectStackList_Object";



function ProjectStackList1({properties, serverUrl, handlePropertyClick, handleEmptyList}){
     
     if(properties.length===0) handleEmptyList(false)
    else handleEmptyList(true)
    
    return(
        
          <div className="Project_stack">
             {properties.map(
                property=>
                <ProjectStackListObject
                    key={property._id}
                    id={property._id}
                    details={property}
                   
                    serverUrl={serverUrl}
                    _handlePropertyClick={handlePropertyClick}
                />
            )}     
          </div>
    );
}

export default ProjectStackList1;