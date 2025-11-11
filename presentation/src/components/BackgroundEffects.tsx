import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
    // Generate bubbles
    const bubbles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        startX: Math.random() * 100,
        size: Math.random() * 30 + 10,
        duration: 8 + Math.random() * 6,
        delay: i * 0.8
    }));




    // Light rays
    const lightRays = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        leftPosition: 15 + i * 15
    }));

    return (
        <>
            {/* Bubbles */}
            <div className="fixed inset-0 pointer-events-none z-5">
                {bubbles.map((bubble) => (
                    <motion.div
                        key={`bubble-${bubble.id}`}
                        className="absolute rounded-full bg-cyan-400/15 border border-cyan-300/25"
                        style={{
                            width: bubble.size,
                            height: bubble.size,
                            left: `${bubble.startX}%`,
                            bottom: -50
                        }}
                        animate={{
                            y: [-50, typeof window !== 'undefined' ? -window.innerHeight - 100 : -1000],
                            x: [0, Math.random() * 100 - 50],
                            opacity: [0, 0.7, 0]
                        }}
                        transition={{
                            duration: bubble.duration,
                            delay: bubble.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>


            {/* Light rays from surface */}
            <div className="fixed top-0 left-0 right-0 h-screen pointer-events-none z-0 opacity-10">
                {lightRays.map((ray) => (
                    <motion.div
                        key={`ray-${ray.id}`}
                        className="absolute top-0 w-2 h-full bg-gradient-to-b from-cyan-300/40 via-cyan-400/20 to-transparent"
                        style={{ left: `${ray.leftPosition}%` }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scaleY: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 5,
                            delay: ray.id * 0.6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Floating particles */}
            <div className="fixed inset-0 pointer-events-none z-5">
                {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-cyan-300/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, Math.random() * 30 - 15, 0],
                            opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            delay: i * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default BackgroundEffects;