import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Sunburst from "../D3/Sunburst";
import data from '../D3/data_sunburst.json';
import { useWindowSize } from "../../utils/useWindowSize";

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
        paragraph: 'Below you can see a sunburst which I made using D3, representing experience with different languages and tools'
    };
    const size = useWindowSize();

    const dimensions = {
        width: size.width / 1.5,
        height: size.width / 1.5,
        margin: {
            top: 70,
            right: 70,
            bottom: 70,
            left: 70
        }
    };

    const [showChart, setShowChart] = useState(false);

    useEffect(() => {
        setShowChart(true);
    }, [size])


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

                    {showChart && <Sunburst
                        data={data}
                        dimensions={dimensions}
                    />}

                </div>
            </div>
        </section>
    );
}

Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;

export default Skills;