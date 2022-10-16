import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from "../elements/Image";

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const Hobbies = ({
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
        title: 'About me',
        paragraph: 'I also have hobbies!'
    };

    return (
        <>
            <section
                {...props}
                className={outerClasses}
                id={"hobbies"}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <SectionHeader data={sectionHeader} className="center-content"/>
                        <div className={'split-wrap'}>
                            <div className="split-item">
                                <div className="split-item-content center-content-mobile reveal-from-left"
                                     data-reveal-container=".split-item">
                                    <p className="m-0">
                                        Aside from programming, I really love practicing calisthenics, fitness, cycling,
                                        hiking, baking and drawing.
                                        Each year I set a calisthenics related
                                        goal for myself. Last year this goal was to do one full straddle press - a move
                                        where you come into a handstand using mostly the strength in your upper body in stead of
                                        your legs. This year, my goal is to walk a few meters on my hands, and walk back again.
                                        It turns out this second part is harder than I thought as walking backwards requires
                                        very different muscles than walking forwards.
                                    </p>
                                    <p>
                                        Furthermore, I am truly a morning person. I love being outside at (or before)
                                        sunrise and going for walks in the forest. I am always in for a walk!
                                    </p>
                                </div>
                                <div className={
                                    classNames(
                                        ' center-content-mobile reveal-from-bottom has-shadow'
                                    )}
                                     data-reveal-container=".split-item">
                                    <Image
                                        style={{filter: 'grayscale(1)'}}
                                        src={require('./../../assets/images/berg.png')}
                                        alt="Standing on a mountain"

                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

Hobbies.propTypes = propTypes;
Hobbies.defaultProps = defaultProps;

export default Hobbies;