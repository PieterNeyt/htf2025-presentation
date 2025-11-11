import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import submarineImg from '../assets/submarine.png';

const Submarine: React.FC = () => {
    const controls = useAnimation();

    useEffect(() => {
        // Start de animatie zodra het component geladen is
        controls.start({
            x: [-400, window.innerWidth + 400],
            y: [180, 230, 280, 330],
            rotate: [0, -5, 3, 0],
            transition: {
                duration: 22, // iets trager voor natuurlijke beweging
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3
            }
        });
    }, [controls]);

    return (
        <motion.div
            className="fixed z-0 pointer-events-none"
            animate={controls}
        >
            <div className="relative opacity-60">
                {/* Submarine image gespiegeld en groter */}
                <img
                    src={submarineImg}
                    alt="Submarine"
                    className="w-56 md:w-72 h-auto scale-x-[-1]"
                />

                {/* Propeller bubbles effect, iets groter */}
                <motion.div
                    className="absolute -left-10 top-1/2 w-28 h-3 bg-cyan-400/30 blur-md"
                    animate={{
                        scaleX: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </motion.div>
    );
};

export default Submarine;
