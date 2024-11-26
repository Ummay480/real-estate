
import React from 'react';
import AboutSection from '../../components/AboutSection';
import Header from "../../components/Header";
import Contacts from "../../components/Contacts";

const AboutPage: React.FC = () => {
  return (
<>
    <div className='max-w-full pt-16 '>
      <Header/>
    </div>
  
        <div className=' flex-center justify-center mx-0 mb-40'>
          <AboutSection/>
        </div>

        <div className='mb-10 lg:mb-0'>
          <Contacts/>
        </div>
    </>
  );
}
export default AboutPage;