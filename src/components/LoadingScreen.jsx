import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Smooth progress over 2 seconds
        const totalDuration = 3500; // 2 seconds
        const intervalTime = 16; // ~60fps
        const totalSteps = totalDuration / intervalTime;
        let currentStep = 0;

        const progressInterval = setInterval(() => {
            currentStep++;
            const newProgress = Math.min((currentStep / totalSteps) * 100, 100);
            setProgress(newProgress);

            if (currentStep >= totalSteps) {
                clearInterval(progressInterval);
            }
        }, intervalTime);

        return () => clearInterval(progressInterval);
    }, []);

    useEffect(() => {
        // Trigger exit animation when complete
        if (progress >= 100) {
            setTimeout(() => {
                setIsExiting(true);
                setTimeout(() => {
                    onLoadingComplete();
                }, 600); // Exit animation duration
            }, 200); // Brief pause at 100%
        }
    }, [progress]);

    return (
        <div className={`loading-screen ${isExiting ? 'exit' : ''}`}>
            {/* Scrolling Background Text */}
            <div className="scrolling-text-container">
                <div className="scrolling-text">
                    FULL STACK WEB DEVELOPER • FULL STACK WEB DEVELOPER • FULL STACK WEB DEVELOPER • FULL STACK WEB DEVELOPER • FULL STACK WEB DEVELOPER •
                </div>
                <div className="scrolling-text">
                    FULL STACK WEB DEVELOPER • FULL STACK WEB DEVELOPER • FULL STACK WEB DEVELOPER • FULL STACK WEB DEVELOPER • FULL STACK WEB DEVELOPER •
                </div>
            </div>

            {/* Center Loading Indicator */}
            <div className="loading-indicator">
                <div className="loading-pill">
                    <div
                        className="loading-fill"
                        style={{ width: `${progress}%` }}
                    />
                    <span className="loading-text">LOADING</span>
                    <span className="loading-percentage">{Math.floor(progress)}%</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
