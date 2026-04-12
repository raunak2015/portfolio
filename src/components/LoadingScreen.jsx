import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('loading'); // 'loading' | 'done' | 'exit'
    const [displayedLines, setDisplayedLines] = useState([]);

    const terminalLines = [
        { text: '> Initializing portfolio...', color: '#16f2b3', delay: 0 },
        { text: '> Loading components...', color: '#7c3aed', delay: 600 },
        { text: '> Compiling projects...', color: '#ec4899', delay: 1200 },
        { text: '> Setting up environment...', color: '#16f2b3', delay: 1800 },
        { text: '> Ready!', color: '#ffffff', delay: 2400 },
    ];

    // Prevent body scroll while loading
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    // Reveal terminal lines one by one
    useEffect(() => {
        const timers = terminalLines.map((line, i) =>
            setTimeout(() => {
                setDisplayedLines(prev => [...prev, line]);
            }, line.delay)
        );
        return () => timers.forEach(clearTimeout);
    }, []);

    // Smooth progress bar over 3 seconds
    useEffect(() => {
        const duration = 3000;
        const fps = 60;
        const steps = duration / (1000 / fps);
        let step = 0;

        const interval = setInterval(() => {
            step++;
            const eased = Math.min(100, (step / steps) * 100);
            setProgress(eased);

            if (step >= steps) {
                clearInterval(interval);
                setPhase('done');
                setTimeout(() => {
                    setPhase('exit');
                    setTimeout(() => {
                        onLoadingComplete();
                    }, 700);
                }, 400);
            }
        }, 1000 / fps);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                background: '#0d1224',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                opacity: phase === 'exit' ? 0 : 1,
                transform: phase === 'exit' ? 'scale(1.04)' : 'scale(1)',
                overflow: 'hidden',
            }}
        >
            {/* Ambient Glows */}
            <div style={{
                position: 'absolute', top: '15%', right: '15%',
                width: 350, height: 350,
                background: 'rgba(124, 58, 237, 0.12)',
                borderRadius: '50%', filter: 'blur(100px)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '15%', left: '15%',
                width: 300, height: 300,
                background: 'rgba(22, 242, 179, 0.08)',
                borderRadius: '50%', filter: 'blur(80px)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: 500, height: 500,
                background: 'rgba(236, 72, 153, 0.05)',
                borderRadius: '50%', filter: 'blur(120px)',
                pointerEvents: 'none',
            }} />

            {/* Grid Background */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                pointerEvents: 'none',
            }} />

            {/* Terminal Window */}
            <div style={{
                width: '100%',
                maxWidth: 560,
                margin: '0 24px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 0 60px rgba(124, 58, 237, 0.2), 0 0 120px rgba(124, 58, 237, 0.08)',
            }}>
                {/* Terminal Title Bar */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.04)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
                    <span style={{
                        marginLeft: 8, fontFamily: 'monospace',
                        fontSize: 13, color: 'rgba(255,255,255,0.45)',
                        letterSpacing: '0.05em',
                    }}>portfolio.exe</span>
                </div>

                {/* Terminal Body */}
                <div style={{ padding: '20px 24px 24px', minHeight: 180 }}>
                    {displayedLines.map((line, i) => (
                        <div key={i} style={{
                            fontFamily: '"Courier New", Courier, monospace',
                            fontSize: 14,
                            color: line.color,
                            marginBottom: 8,
                            opacity: 1,
                            animation: 'fadeSlideIn 0.3s ease-out',
                        }}>
                            {line.text}
                            {i === displayedLines.length - 1 && phase === 'loading' && (
                                <span style={{
                                    display: 'inline-block',
                                    width: 8, height: 14,
                                    background: line.color,
                                    marginLeft: 4,
                                    verticalAlign: 'middle',
                                    animation: 'blink 0.7s step-end infinite',
                                }} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Progress Bar */}
                <div style={{ padding: '0 24px 24px' }}>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', marginBottom: 8,
                    }}>
                        <span style={{
                            fontFamily: 'monospace', fontSize: 11,
                            color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                        }}>Loading</span>
                        <span style={{
                            fontFamily: 'monospace', fontSize: 13,
                            color: '#16f2b3', fontWeight: 700,
                        }}>{Math.floor(progress)}%</span>
                    </div>

                    {/* Track */}
                    <div style={{
                        width: '100%', height: 6,
                        background: 'rgba(255,255,255,0.07)',
                        borderRadius: 100,
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        {/* Fill */}
                        <div style={{
                            height: '100%',
                            width: `${progress}%`,
                            borderRadius: 100,
                            background: 'linear-gradient(90deg, #7c3aed, #ec4899, #16f2b3)',
                            backgroundSize: '200% 100%',
                            transition: 'width 0.05s linear',
                            boxShadow: '0 0 12px rgba(22, 242, 179, 0.5)',
                            animation: 'gradientMove 2s linear infinite',
                        }} />
                    </div>
                </div>
            </div>

            {/* Name / Branding */}
            <div style={{
                marginTop: 32, textAlign: 'center',
            }}>
                <div style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 13,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.25)',
                }}>Raunak Shahu &nbsp;•&nbsp; Portfolio</div>
            </div>

            {/* Inline keyframes */}
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateX(-8px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes gradientMove {
                    0%   { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;
