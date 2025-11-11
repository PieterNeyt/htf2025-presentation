import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';
import Submarine from './Submarine';
import Diver from './Diver';
import OceanFloor from './OceanFloor';
import Slide from './Slide';
import { slides } from './SlidesData.ts';

const DeepSeaPresentation: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div
            ref={containerRef}
            className="relative w-full min-h-[1000vh] overflow-y-scroll scrollbar-hide"
        >
            {/* Background gradient */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#1a4d6d] via-[#0d2438] to-[#020617] -z-10" />

            <BackgroundEffects />
            <Submarine />
            <Diver scrollProgress={scrollYProgress} />

            <div className="relative z-10">
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        slide={slide}
                        index={index}
                        totalSlides={slides.length}
                        scrollProgress={scrollYProgress}
                    />
                ))}
            </div>

            <OceanFloor />
        </div>

    );
};

export default DeepSeaPresentation;