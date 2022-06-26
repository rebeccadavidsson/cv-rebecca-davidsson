import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplitWork from '../components/sections/FeaturesSplitWork';
import FeaturesSplitEducation from "../components/sections/FeaturesSplitEducation";
import EducationSection from "../components/sections/EducationSection";
import Hobbies from "../components/sections/Hobbies";
import Skills from "../components/sections/Skills";

const Home = () => {

  return (
    <>
      <Hero />
      <FeaturesSplitWork topDivider invertMobile imageFill/>
        <FeaturesSplitEducation invertMobile topDivider imageFill/>
        <Skills />
        <EducationSection topDivider invertMobile />

        <Hobbies topDivider />


        <div style={{ height: '5em'}}></div>

    </>
  );
}

export default Home;