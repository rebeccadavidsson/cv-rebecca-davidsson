import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
      id={"contact"}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Make contact
              </h3>
          </div>
          <div className="cta-action">
            <p>
              You can reach me on <a href={"https://www.linkedin.com/in/rebecca-davidsson-7a8931127/"}>LinkedIn</a>,
              view my not so up to date <a href={"https://github.com/rebeccadavidsson"}>Github</a> page, or contact me
              via e-mail or phone.
            </p>
            <p>
              E-mail <a href="mailto:rebeccadavidsson3@gmail.com">rebeccadavidsson3@gmail.com</a>
            </p>
            <p>
              Phone <a href="tel:+31611220444">+31 6 11220444</a>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;