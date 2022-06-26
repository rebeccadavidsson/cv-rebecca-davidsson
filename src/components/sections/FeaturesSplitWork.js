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
    title: 'Things that I have been working on',
    paragraph: 'They call it work experience'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id={"work"}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  PWN - September 2021 until present
                  </div>
                <div className="text-xs fw-600 tt-u mb-8">
                  NAVARA
                </div>
                <h3 className="mt-0 mb-12">
                  Migration to headless CMS
                  </h3>
                <p className="m-0">
                  At PWN (Provinciaal Waterleidingbedrijf Noord-Holland), i have been working on modernizing the entire website by
                  building a headless structure with a combination of Angular, .NET and Drupal.
                  This project also gave me the opportunity to learn more about Azure DevOps CI/CD pipelines.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom has-shadow',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <Tiles data={tilesData.tiles.pwn}/>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  House of Tracks - May 2020 until April 2021
                  </div>
                <h3 className="mt-0 mb-12">
                  React based e-commerce
                  </h3>
                <p className="m-0">
                  The music marketplace <a href={"https://houseoftracks.com/"}>House Of Tracks</a> launched a new website where I was responsible for
                  building new features, optimizing the mobile version and maintaining the website.
                  I used React and JavaScript to create dynamic features in
                  the website. In addition to the House Of Tracks website,
                  I was responsible for creating a whole new website from scratch, using React. Tasks included
                  handling redux store updates
                  to provide React apps with APIs, along with building multiple responsive designs.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom has-shadow',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/houseoftracks.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <Tiles data={tilesData.tiles.hot}/>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplitWork.propTypes = propTypes;
FeaturesSplitWork.defaultProps = defaultProps;

export default FeaturesSplitWork;