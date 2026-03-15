import { Code, Database, Brain, Rocket } from "lucide-react";
import urbanMonkeyImg from "../assets/projects/urban-monkey.png";
import titanImg from "../assets/projects/titan.png";
import fellowImg from "../assets/projects/fellow.png";
import cantabilImg from "../assets/projects/cantabil.png";
import drinkolipopImg from "../assets/projects/drinkolipop.png";
import razerImg from "../assets/projects/razer.png";
import mealExplorerImg from "../assets/projects/meal-explorer.png";
import ticTacToeImg from "../assets/projects/tic-tac-toe.png";
import clickCounterImg from "../assets/projects/click-counter.png";
import colorGuessingImg from "../assets/projects/color-guessing.png";
import whackAMoleImg from "../assets/projects/whack-a-mole.png";
import typingSpeedImg from "../assets/projects/typing-speed.png";
import memoryFlipImg from "../assets/projects/memory-flip.png";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const services = [
    {
        title: "Web Developer",
        icon: Code,
    },
    {
        title: "React Native Developer",
        icon: Rocket,
    },
    {
        title: "Backend Developer",
        icon: Database,
    },
    {
        title: "AI Engineer",
        icon: Brain,
    },
];

export const technologies = [
    {
        name: "HTML 5",
        icon: "html",
    },
    {
        name: "CSS 3",
        icon: "css",
    },
    {
        name: "JavaScript",
        icon: "javascript",
    },
    {
        name: "React JS",
        icon: "react",
    },
    {
        name: "Tailwind CSS",
        icon: "tailwind",
    },
    {
        name: "Node JS",
        icon: "nodejs",
    },
    {
        name: "MongoDB",
        icon: "mongodb",
    },
    {
        name: "Three JS",
        icon: "threejs",
    },
    {
        name: "git",
        icon: "git",
    },
    {
        name: "figma",
        icon: "figma",
    },
];

export const experiences = [];

export const projects = [
    {
        name: "Urban Monkey Clone",
        description: "A visually striking e-commerce clone of the Urban Monkey streetwear brand, featuring modern layouts and smooth product browsing.",
        tags: [
            { name: "clone", color: "text-blue-500" },
            { name: "e-commerce", color: "text-green-500" },
        ],
        category: "Clones",
        image: urbanMonkeyImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://urbon-monkey-clone-raunak.netlify.app",
    },
    {
        name: "Titan Clone",
        description: "A sophisticated recreation of the Titan watches storefront, emphasizing premium product displays and responsive design.",
        tags: [
            { name: "clone", color: "text-blue-500" },
            { name: "retail", color: "text-pink-500" },
        ],
        category: "Clones",
        image: titanImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://titan-clone-raunak.netlify.app",
    },
    {
        name: "Fellow Clone",
        description: "A clean, high-end coffee gear e-commerce clone based on Fellow Products, focusing on minimal aesthetics.",
        tags: [
            { name: "clone", color: "text-blue-500" },
            { name: "minimal", color: "text-green-500" },
        ],
        category: "Clones",
        image: fellowImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://fellow-clone-raunak.netlify.app",
    },
    {
        name: "Cantabil Clone",
        description: "A robust clothing retail clone of Cantabil, showcasing complex grid layouts and navigation structures.",
        tags: [
            { name: "clone", color: "text-blue-500" },
            { name: "fashion", color: "text-pink-500" },
        ],
        category: "Clones",
        image: cantabilImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://cantabil-clone-raunak.netlify.app",
    },
    {
        name: "Drinkolipop Clone",
        description: "A vibrant, colorful clone of the Olipop soda brand website, featuring playful typography and animations.",
        tags: [
            { name: "clone", color: "text-blue-500" },
            { name: "landing", color: "text-green-500" },
        ],
        category: "Clones",
        image: drinkolipopImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://drinkolipop-clone-raunak.netlify.app",
    },
    {
        name: "Razer Clone",
        description: "A dark-themed, gaming aesthetics clone of Razer's official site, featuring high contrast and neon accents.",
        tags: [
            { name: "clone", color: "text-blue-500" },
            { name: "gaming", color: "text-pink-500" },
        ],
        category: "Clones",
        image: razerImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://razer-clone-raunak.netlify.app",
    },
    {
        name: "Meal Explorer",
        description: "A dynamic React-based application that allows users to discover, search, and explore various meal recipes.",
        tags: [
            { name: "react", color: "text-blue-500" },
            { name: "api", color: "text-green-500" },
        ],
        category: "React",
        image: mealExplorerImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://meal-explorer-raunak.netlify.app",
    },
    {
        name: "Tic Tac Toe",
        description: "A classic, interactive Tic-Tac-Toe game built with modern web technologies and sharp UI.",
        tags: [
            { name: "game", color: "text-blue-500" },
            { name: "logic", color: "text-green-500" },
        ],
        category: "Games",
        image: ticTacToeImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://raunak-tic-tac-toe.netlify.app",
    },
    {
        name: "Click Counter",
        description: "A fast-paced interactive click counter game designed to test user reflexes and speed.",
        tags: [
            { name: "game", color: "text-blue-500" },
            { name: "interactive", color: "text-pink-500" },
        ],
        category: "Games",
        image: clickCounterImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://raunak-click-counter-game.netlify.app",
    },
    {
        name: "Color Guessing",
        description: "An engaging RGB color guessing game that challenges users to identify hex/rgb color codes visually.",
        tags: [
            { name: "game", color: "text-blue-500" },
            { name: "ui-ux", color: "text-green-500" },
        ],
        category: "Games",
        image: colorGuessingImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://raunak-color-geussing-game.netlify.app",
    },
    {
        name: "Whack-a-Mole",
        description: "A modern web recreation of the classic arcade game Whack-a-Mole, complete with scoring and timers.",
        tags: [
            { name: "game", color: "text-blue-500" },
            { name: "logic", color: "text-pink-500" },
        ],
        category: "Games",
        image: whackAMoleImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://raunak-whack-a-mole.netlify.app",
    },
    {
        name: "Typing Speed Test",
        description: "A responsive application to accurately track WPM, accuracy, and keystroke metrics in real-time.",
        tags: [
            { name: "tool", color: "text-blue-500" },
            { name: "utility", color: "text-green-500" },
        ],
        category: "React",
        image: typingSpeedImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://raunak-typing-speed-test.netlify.app",
    },
    {
        name: "Memory Flip",
        description: "A challenging card-flipping memory match game featuring smooth CSS transitions and state management.",
        tags: [
            { name: "game", color: "text-blue-500" },
            { name: "logic", color: "text-pink-500" },
        ],
        category: "Games",
        image: memoryFlipImg,
        source_code_link: "https://github.com/raunak2015",
        demo_link: "https://raunak-memory-flip-game.netlify.app",
    },
];
