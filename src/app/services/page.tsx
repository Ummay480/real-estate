import React from 'react';
import Services from "../../components/Services";


const ProjectPage: React.FC = () => {
  return (
    <>
          
      <div className='extraspace h-10'>
      <h1 className="text-4xl my-20 font-bold text-center ml-20 bg-gray-900 text-transparent bg-clip-text"> Our Services
 
      </h1>
</div>
      {/* Project Section */}
      <div className="flex justify-center mt-20">
        <Services />
      </div>

      
    </>
  );
};

export default ProjectPage;
