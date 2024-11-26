import React from 'react';
import Contact from "../../components/Contact";


const Contactpage: React.FC = () => {
  return (
    <>
          {/* Contacts section with adjusted margin */}
      <div className="flex justify-center mb-10 px-10 mr-10 mt-10 md:mt-40 lg:mt-40">
        <Contact/>
      </div>
    </>
  );
};

export default Contactpage;
