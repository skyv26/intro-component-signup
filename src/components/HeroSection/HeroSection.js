import React from 'react';
import css from './HeroSection.module.css';

const HeroSection = (props) => {
    return (
        <section className={css.HeroSection}>
            <h1 className={css.Heading}>Learn to code by watching others</h1>
            <p className={css.Desc}>
                See how experienced developers solve
                problems in real-time. Watching scripted
                tutorials is great, but understanding how
                developers think is invaluable.
            </p>
        </section>
    );
}

export default HeroSection;