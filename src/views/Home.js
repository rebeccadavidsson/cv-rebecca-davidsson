import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplitWork from '../components/sections/FeaturesSplitWork';
import FeaturesSplitEducation from "../components/sections/FeaturesSplitEducation";
import EducationSection from "../components/sections/EducationSection";
import Hobbies from "../components/sections/Hobbies";
import Skills from "../components/sections/Skills";
import Cta from "../components/sections/Cta";
import { useWindowSize } from "../utils/useWindowSize";

const Home = () => {

  const size = useWindowSize();

  return (
    <>
      <Hero />
      <FeaturesSplitWork topDivider invertMobile imageFill/>
        <FeaturesSplitEducation invertMobile topDivider imageFill/>
        <EducationSection topDivider invertMobile />
        <Hobbies topDivider />
        {size.width > 676 && <Skills />}
        <Cta />
        <div style={{ height: '5em'}}></div>
    </>
  );
}

export default Home;