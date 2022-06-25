import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults
}

const EducationSection = ({
                          className,
                          children,
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
                          pushLeft,
                          ...props
                        }) => {

  const outerClasses = classNames(
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
  );

  const innerClasses = classNames(
      'section-inner testimonial-inner',
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
        title: 'Education',
        paragraph: ''
    };

    const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
    );

  return (
      <section
          {...props}
          className={outerClasses}
          id={"education"}
      >
        <div className="container">
          <div className={innerClasses}>
            {children}
              <SectionHeader data={sectionHeader} className="center-content" />

              <div className={splitClasses}>

                  <div className={tilesClasses}>


                      <div className="tiles-item reveal-from-bottom">
                          <div className="tiles-item-inner">
                              <div>
                                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                      2019 - 2021
                                  </div>
                                  <div className={"text-color-high"}>Msc. Computational Science</div>
                                  <div>University of Amsterdam</div>
                              </div>
                              <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                  <p className="text-sm mb-0">
                                      — The master's programme Computational Science is a very broad programme with a focus on developing
                                      computational models and simulations. This programme prepared students to work with
                                      advanced analytics, data science and machine learning. In addition, a very valuable skill that was taught during
                                      this master's was programming in Python.
                                      For me, the most interesting courses in the programme were Agent-Based Modelling, Data Mining
                                      and Machine Learning.
                                  </p>

                              </div>
                          </div>
                      </div>

                      <div className="tiles-item reveal-from-bottom">
                          <div className="tiles-item-inner">
                              <div>
                                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                      2016 - 2019
                                  </div>
                                  <div className={"text-color-high"}>Bsc. Cognitive Neuroscience</div>
                                  <div>University of Amsterdam</div>
                              </div>
                              <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                  <p className="text-sm mb-0">
                                      — The unique programme Cognitive Neuroscience prepared students for the academic world with courses
                                      such as Statistical Data Analysis and Research Methods. I learned a lot about the human brain and body.
                                      I spent the last year studying mathematics and programming, where I also followed a minor in programming.
                                      This programming minor was definitely the best choice that I have made in a long time. I made some very good
                                      friends who also really enjoyed working on programming projects together.
                                  </p>

                              </div>
                          </div>
                      </div>

                  </div>

              </div>
          </div>
        </div>
      </section>
  );
}

EducationSection.propTypes = propTypes;
EducationSection.defaultProps = defaultProps;

export default EducationSection;