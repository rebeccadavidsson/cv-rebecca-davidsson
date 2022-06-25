import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Chart from "../D3/Chart";
import data from '../D3/data.json';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const Skills = ({
                     className,
                     topOuterDivider,
                     bottomOuterDivider,
                     topDivider,
                     bottomDivider,
                     hasBgColor,
                     invertColor,
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
        'testimonial-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
        title: 'Skills',
        paragraph: ''
    };

    const dimensions = {
        width: 750,
        height: 750,
        margin: {
            top: 70,
            right: 70,
            bottom: 70,
            left: 70
        }
    };


    return (
        <section
            {...props}
            className={outerClasses}
            id={"skills"}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content"
                    />

                    <Chart
                        data={data}
                        dimensions={dimensions}
                    />


                </div>
            </div>
        </section>
    );
}

Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;

export default Skills;