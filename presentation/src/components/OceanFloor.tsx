import React from 'react';

const OceanFloor: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-5 pointer-events-none">

            {/* SVG Ocean floor with rocks */}
            <svg
                viewBox="0 0 1200 220"
                className="w-full h-auto"
                preserveAspectRatio="none"
                style={{ filter: 'drop-shadow(0 -10px 30px rgba(6, 182, 212, 0.1))' }}
            >
                {/* Main rock layer */}
                <path
                    d="M0,120 Q100,80 200,110 Q250,90 350,120 Q450,100 550,115 Q650,95 750,110 Q850,120 950,105 Q1050,90 1150,115 L1200,115 L1200,220 L0,220 Z"
                    fill="#1e293b"
                    opacity="0.9"
                />

                {/* Secondary layer */}
                <path
                    d="M0,140 Q150,100 300,135 Q400,120 500,140 Q600,115 700,135 Q850,145 1000,130 Q1100,120 1200,140 L1200,220 L0,220 Z"
                    fill="#0f172a"
                    opacity="0.95"
                />

                {/* Darkest bottom layer */}
                <path
                    d="M0,160 L1200,160 L1200,220 L0,220 Z"
                    fill="#020617"
                    opacity="1"
                />
            </svg>

            {/* Gradient overlay for depth effect */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

        </div>
    );
};

export default OceanFloor;