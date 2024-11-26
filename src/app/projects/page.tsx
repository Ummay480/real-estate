import React from 'react';
import ProjectSection from "../../components/ProjectSection";
import Contacts from "../../components/Contacts";
import Header3 from "../../components/Header3";
import ProjectCards from "@/components/ProjectCards";

const ProjectPage: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="mt-16 left-0 right-0 z-10 "> {/* Ensure header stays at top */}
        <Header3 />
      </div>

      {/* Spacer to offset the header's height */}
      <div className="py-10 "> {/* Adjust padding to match header height */}
        <h1 className="flex justify-center text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text mt-20 lg:mt-40 mb-14 ">
          My Projects
        </h1>
       
        {/* Adjust ProjectCards positioning on mobile */}
         <div className="mt-16 mb-10">
          <ProjectCards />
        </div>
      </div>
      <div className='extraspace h-80'>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text">
 
      </h1>
</div>
      {/* Project Section */}
      <div className="flex justify-center lg:-mt-96">
        <ProjectSection />
      </div>

      {/* Contacts Section */}
      <div className="flex justify-center mt-20 mb-20">
        <Contacts />
      </div>
    </>
  );
};

export default ProjectPage;
