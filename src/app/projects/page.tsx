import React from 'react';
import ProjectSection from "../../components/ProjectSection";


const ProjectPage: React.FC = () => {
  return (
    <>
          
      <div className='extraspace h-10'>
      <h1 className="text-4xl my-20 font-bold text-center bg-gray-900 text-transparent bg-clip-text"> Our Projects
 
      </h1>
</div>
      {/* Project Section */}
      <div className="flex justify-center mt-20">
        <ProjectSection />
      </div>

      
    </>
  );
};

export default ProjectPage;
