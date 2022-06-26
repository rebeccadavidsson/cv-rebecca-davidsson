import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Tiles from "./Tiles";
import tilesData from '../../assets/locales/tiles.json';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplitWork = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Other activities',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id={"activities"}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Avanade - November 2021 until July 2022
                  </div>
                <h3 className="mt-0 mb-12">
                  Advanced Analytics Intern
                  </h3>
                <p className="m-0">
                  Analysis and comparison of machine learning and mathematical models, applicable to
                  Covid-19 data (grade: 9). I mainly used the tools: Python, Tensorflow, Pandas, Plotly, React and PowerBI.
                  The project can be viewed here: <a href={"https://thesisproject.vercel.app/"}>https://thesisproject.vercel.app/</a>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom has-shadow',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/thesis.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <Tiles data={tilesData.tiles.avanade} />

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  University of Amsterdam - Sep. 2019 until Nov. 2020
                  </div>
                <h3 className="mt-0 mb-12">
                  Teaching Assistant
                  </h3>
                <p className="m-0">
                  I was a teaching assistant at the master Software Engineering. Furthermore, I worked for the minor in programming
                  at the University of Amsterdam.
                  At this minor, students who don’t have any experience with programming learn to write
                  code in C#, Python and JavaScript. Courses that I taught were the CS50(x) course, Webapps, Databases and web programming.
                  Responsibilities included tutoring students (in class and online), grading
                  assignments and working on the UvA website. The website can be viewed here: <a href={"https://www.proglab.nl/keuzehulp/"}>https://www.proglab.nl/keuzehulp/</a>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom has-shadow',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/minor.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <Tiles data={tilesData.tiles.uva} />

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplitWork.propTypes = propTypes;
FeaturesSplitWork.defaultProps = defaultProps;

export default FeaturesSplitWork;