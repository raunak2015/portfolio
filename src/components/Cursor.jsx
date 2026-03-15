import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
    // Avoid React state for coordinate updates to prevent laggy re-renders
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth physics-based springs
    // Tight spring for the main cursor dot
    const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
    // Slightly looser spring for the glow to create a trailing effect
    const springConfigGlow = { damping: 30, stiffness: 300, mass: 0.2 };
    
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const glowX = useSpring(mouseX, springConfigGlow);
    const glowY = useSpring(mouseY, springConfigGlow);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === "A" ||
                e.target.tagName === "BUTTON" ||
                e.target.closest("a") ||
                e.target.closest("button")
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        window.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] hidden lg:block bg-[#915eff] mix-blend-screen"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 2 : 1,
                }}
                transition={{
                    scale: { type: "spring", stiffness: 400, damping: 25 }
                }}
            />
            {/* Glow effect */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9998] hidden lg:block"
                style={{
                    x: glowX,
                    y: glowY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, rgba(145,94,255,0.4) 0%, rgba(145,94,255,0) 70%)",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    scale: { type: "spring", stiffness: 300, damping: 20 }
                }}
            />
        </>
    );
};

export default Cursor;
