import React from 'react';
import ContactForm from '../../components/ContactForm';
import Contacts from "../../components/Contacts";
import Header1 from "../../components/Header1";

const Contactpage: React.FC = () => {
  return (
    <>
      {/* Wrapper for Header1 */}
      <div className="w-screen mb-10 border-zinc-100 pt-16">

        <Header1 />
      </div>

      <div className="extraspace h-20 mt-40 md:-mt-40 lg:mt-10">
      </div>

      {/* Contact Form with adjusted top margin */}
      <div className="flex justify-center mt-60 sm:pt-10 md:pt-20 lg:pt-0 xl:pt-10 sm:mt-60 md:mt-40 lg:mt-20 lg:-mb-40 px-6">
        <ContactForm />
      </div>
      <div className="extraspace h-20 mt-40 md:mt-40 lg:mt-96">
      </div>

      {/* Contacts section with adjusted margin */}
      <div className="flex justify-center mb-10 px-10 mr-10 mt-10 md:mt-40 lg:mt-40">
        <Contacts />
      </div>
    </>
  );
};

export default Contactpage;
