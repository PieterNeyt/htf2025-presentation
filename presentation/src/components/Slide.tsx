import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import type {Slide as SlideType} from './SlidesData.ts';

interface SlideProps {
    slide: SlideType;
    index: number;
    totalSlides: number;
    scrollProgress: MotionValue<number>;
}

const Slide: React.FC<SlideProps> = ({ slide, index, totalSlides, scrollProgress }) => {
    const slideProgress = index / (totalSlides - 1);

    const opacity = useTransform(
        scrollProgress,
        [
            Math.max(0, slideProgress - 0.15),
            slideProgress,
            Math.min(1.05, slideProgress + 0.15)
        ],
        [0, 1, 1]
    );


    const y = useTransform(
        scrollProgress,
        [slideProgress - 0.1, slideProgress, slideProgress + 0.1],
        [100, 0, -100]
    );

    return (
        <motion.div
            className="min-h-screen flex items-center justify-center px-8 py-20"
            style={{ opacity, y }}
        >
            <div className="max-w-5xl w-full">
                {slide.type === 'hero' && (
                    <div className="text-center space-y-8">
                        <motion.h1
                            className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {slide.content.title}
                        </motion.h1>
                        <motion.h2
                            className="text-3xl md:text-4xl text-cyan-300 font-light"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {slide.content.subtitle}
                        </motion.h2>
                        <motion.p
                            className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {slide.content.description}
                        </motion.p>
                    </div>
                )}

                {slide.type === 'text' && (
                    <motion.div
                        className="bg-gradient-to-br from-blue-900/40 via-cyan-900/30 to-teal-900/40 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-cyan-300 mb-8">
                            {slide.content.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                            {slide.content.text}
                        </p>
                    </motion.div>
                )}

                {slide.type === 'code' && (
                    <motion.div
                        className="bg-gradient-to-br from-slate-900/80 via-blue-950/70 to-slate-900/80 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-emerald-500/30 shadow-2xl shadow-emerald-500/10"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 mb-8">
                            {slide.content.title}
                        </h2>
                        <pre className="text-base md:text-lg text-emerald-200 font-mono overflow-x-auto bg-slate-950/50 p-6 rounded-xl border border-emerald-500/20">
              <code>{slide.content.code}</code>
            </pre>
                    </motion.div>
                )}
                {slide.type === 'image' && (
                    <motion.div
                        className="text-center space-y-8 flex flex-col items-center justify-center"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src={slide.content.imageUrl}
                            alt={slide.content.title}
                            className="w-56 h-56 md:w-72 md:h-72 mb-8 object-contain drop-shadow-2xl"
                            animate={{
                                rotateY: [0, 10, 0, -10, 0],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <h2 className="text-5xl md:text-6xl font-bold text-cyan-300">
                            {slide.content.title}
                        </h2>
                        <p className="text-2xl md:text-3xl text-blue-200 max-w-3xl">
                            {slide.content.description}
                        </p>
                    </motion.div>
                )}

                {slide.type === 'stats' && (
                    <motion.div
                        className="bg-gradient-to-br from-indigo-950/50 via-purple-950/40 to-blue-950/50 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-purple-500/30 shadow-2xl shadow-purple-500/10"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-purple-300 mb-12 text-center">
                            {slide.content.title}
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {slide.content.stats?.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center bg-slate-900/40 rounded-2xl p-6 border border-purple-400/20"
                                    initial={{ scale: 0, rotate: -10 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-lg md:text-xl text-purple-200">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {slide.type === 'finale' && (
                    <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4 md:px-8 lg:px-16 text-center space-y-10 overflow-visible">
                        <motion.h1
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {slide.content.title}
                        </motion.h1>
                        <motion.p
                            className="text-2xl sm:text-3xl md:text-4xl text-cyan-300"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {slide.content.subtitle}
                        </motion.p>
                        <motion.button
                            className="px-12 py-6 text-2xl font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all"
                            whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(34, 211, 238, 0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {slide.content.cta}
                        </motion.button>
                    </div>
                )}

            </div>
        </motion.div>
    );
};

export default Slide;