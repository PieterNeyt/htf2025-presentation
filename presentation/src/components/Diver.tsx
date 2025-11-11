import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface DiverProps {
    scrollProgress: MotionValue<number>;
}

const Diver: React.FC<DiverProps> = ({ scrollProgress }) => {
    if (typeof window === 'undefined') return null;

    // Hoogte van de viewport
    const vh = window.innerHeight;

    // Duiker start iets boven het scherm en eindigt onderaan het scherm
    const y = useTransform(scrollProgress, [0, 1], [100, vh - 150]);

    // Constante X-positie (recht naar beneden)
    const x = 75;

    // Rotatie: verticaal naar beneden
    const rotate = 90;

    return (
        <motion.div
            className="fixed z-50 pointer-events-none"
            style={{ y, x, rotateZ: rotate }}
        >
            <video
                className="w-[180px] md:w-[250px] opacity-90 drop-shadow-2xl"
                loop
                muted
                autoPlay
                playsInline
            >
                <source
                    src="https://www.hackthefuture.be/2025/assets/webm/diver2.webm"
                    type="video/webm"
                />
            </video>
        </motion.div>
    );
};

export default Diver;
