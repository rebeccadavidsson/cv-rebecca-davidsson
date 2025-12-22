import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplitWork from '../components/sections/FeaturesSplitWork';
import FeaturesSplitEducation from "../components/sections/FeaturesSplitEducation";
import EducationSection from "../components/sections/EducationSection";

const Home = () => {

  return (
    <>
      <Hero />
      <FeaturesSplitWork topDivider invertMobile imageFill/>
        <FeaturesSplitEducation invertMobile topDivider imageFill/>
        <EducationSection topDivider invertMobile />
        {/*<Cta />*/}
        <div style={{ height: '5em'}}></div>
    </>
  );
}

export default Home;
