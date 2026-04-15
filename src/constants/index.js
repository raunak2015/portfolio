import { Code, Database, Brain, Rocket } from "lucide-react";
import hackathonTeamImg from "../assets/hackathon-team.png";
import viralPulseImg from "../assets/projects/viral-pulse.png";
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
    { id: "about", title: "About" },
    { id: "hackathons", title: "Hackathons" },
    { id: "skills", title: "Skills" },
    { id: "certifications", title: "Certifications" },
    { id: "projects", title: "Projects" },
    { id: "education", title: "Education" },
    { id: "contact", title: "Contact" },
];

export const services = [
    { title: "Web Developer", icon: Code },
    { title: "React Native Developer", icon: Rocket },
    { title: "Backend Developer", icon: Database },
    { title: "AI Engineer", icon: Brain },
];

export const technologies = [
    { name: "HTML 5", icon: "html" },
    { name: "CSS 3", icon: "css" },
    { name: "JavaScript", icon: "js" },
    { name: "React JS", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Node JS", icon: "nodejs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Git", icon: "git" },
    { name: "Figma", icon: "figma" },
    { name: "GitHub", icon: "github" },
    { name: "Redux Toolkit", icon: "redux" },
];

export const hackathons = [
  {
    id: 1,
    title: "Team Leader & Code Catalyst",
    company: "CRAFTATHON | IEEE Computer Society",
    duration: "(Feb 2024)",
    description: "Led a cross-functional team of 4 to design and develop ViralPulse AI. Orchestrated the system architecture, integrated AI models for trend detection, and managed the frontend development workflow during a 24-hour high-pressure hackathon.",
    images: [
      "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1776017639/WhatsApp_Image_2026-04-12_at_5.51.08_PM_1_cq7s6q.jpg",
      "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1776017640/WhatsApp_Image_2026-04-12_at_5.51.10_PM_visjjl.jpg",
      "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1776017640/WhatsApp_Image_2026-04-12_at_5.51.08_PM_gt2yvf.jpg",
      "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1776017640/WhatsApp_Image_2026-04-12_at_5.51.05_PM_xtcuyd.jpg"
    ],
  }
];

export const educations = [
  {
    id: 1,
    title: "Bachelor of Technology",
    duration: "2025 - 2029",
    institution: "Swaminarayan University",
    description: "Currently pursuing B.Tech with an outstanding 9.86 SGPA in Semester 1.",
  },
  {
    id: 2,
    title: "Higher Secondary Certificate (HSC)",
    duration: "2023 - 2025",
    institution: "GSEB",
    description: "Completed 12th grade with a score of 84%.",
  },
  {
    id: 3,
    title: "Secondary School Certificate (SSC)",
    duration: "2021 - 2023",
    institution: "GSEB",
    description: "Completed 10th grade with a score of 84%.",
  }
];

export const projects = [
    {
        name: "ViralPulse AI",
        description: "An AI-powered digital marketing assistant that predicts content virality using NLP and deep learning. Features a trend detection engine, engagement prediction, and platform-aware content strategy optimization.",
        tags: [
            { name: "AI/ML", color: "text-[#16f2b3]" },
            { name: "React", color: "text-[#7c3aed]" },
            { name: "NLP", color: "text-[#ec4899]" },
        ],
        category: "React",
        image: viralPulseImg,
        source_code_link: "https://github.com/raunak2015/ai-marketing-assistant",
        demo_link: "https://viralpulse-ai.netlify.app",
    },
    {
        name: "Urban Monkey Clone",
        description: "A visually striking e-commerce clone of the Urban Monkey streetwear brand, featuring modern layouts and smooth product browsing.",
        tags: [
            { name: "clone", color: "text-blue-500" },
            { name: "e-commerce", color: "text-green-500" },
        ],
        category: "Clones",
        image: urbanMonkeyImg,
        source_code_link: "https://github.com/raunak2015/URBAN-MONKEY-Clone",
        demo_link: "https://urbon-monkey-clone-raunak.netlify.app",
        youtube_link: "https://youtu.be/dReq9aj5TkU?si=5_QSotdGAI47dYCB",
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
        source_code_link: "https://github.com/raunak2015/Titan-clone",
        demo_link: "https://titan-clone-raunak.netlify.app",
        youtube_link: "https://youtu.be/mOEov7Hs22M?si=3u-EgaCzTuF0hpOg",
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
        source_code_link: "https://github.com/raunak2015/Fellow--clone",
        demo_link: "https://fellow-clone-raunak.netlify.app",
        youtube_link: "https://youtu.be/UFF8oj_NVnw?si=7Or73WDfZ2CTsXah",
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
        source_code_link: "https://github.com/raunak2015/cantabilshop-clone",
        demo_link: "https://cantabil-clone-raunak.netlify.app",
        youtube_link: "https://youtu.be/p4O5XJY6uO4?si=upINcNz4VyTSMzvk",
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
        source_code_link: "https://github.com/raunak2015/drinkolipop-clone",
        demo_link: "https://drinkolipop-clone-raunak.netlify.app",
        youtube_link: "https://youtu.be/KkUEh1MufzA?si=BPYx_0yspai3CmQn",
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
        source_code_link: "https://github.com/raunak2015/razer-clone",
        demo_link: "https://razer-clone-raunak.netlify.app",
        youtube_link: "https://youtu.be/v9_xSSzA5OE?si=7s6SqYv_p8h861rn",
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
        source_code_link: "https://github.com/raunak2015/react-meal-explorer",
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
        source_code_link: "https://github.com/raunak2015/Games/tree/main/06%20Tic%20Tac%20Toe",
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
        source_code_link: "https://github.com/raunak2015/Games/tree/main/01%20click%20counter%20game",
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
        source_code_link: "https://github.com/raunak2015/Games/tree/main/02%20Color%20Guessing%20Game",
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
        source_code_link: "https://github.com/raunak2015/Games/tree/main/03%20Whack-a-Mole",
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
        source_code_link: "https://github.com/raunak2015/Games/tree/main/04%20Typing%20Speed%20Test",
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
        source_code_link: "https://github.com/raunak2015/Games/tree/main/05%20Memory%20Flip%20Card%20Game",
        demo_link: "https://raunak-memory-flip-game.netlify.app",
    },
];

export const certifications = [
  {
    title: "OCI 2025 Certified AI Foundations Associate",
    institution: "Oracle University",
    date: "Oct 2025",
    link: "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1775670837/Oracle_page-0001_srdact.jpg",
  },
  {
    title: "Advanced Software Engineering Job Simulation",
    institution: "Walmart Global Tech",
    date: "Nov 2025",
    link: "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1775670833/Walmart_page-0001_rpj8rx.jpg",
  },
  {
    title: "Technology Job Simulation",
    institution: "Deloitte",
    date: "Dec 2025",
    link: "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1775670832/Delootte_certificate3_page-0001_rzptn1.jpg",
  },
  {
    title: "Data Analytics Job Simulation",
    institution: "Deloitte",
    date: "Dec 2025",
    link: "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1775670832/Delootte_certificate2_page-0001_upslcz.jpg",
  },
  {
    title: "Cyber Job Simulation",
    institution: "Deloitte",
    date: "Nov 2025",
    link: "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1775670833/Deloitte_certificate_page-0001_1_mwnl1v.jpg",
  },
  {
    title: "ArtPark CodeForge Hackathon Participant",
    institution: "IISc Bangalore / ArtPark",
    date: "2024",
    link: "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1775670833/ArtPark_page-0001_1_fdgwpy.jpg",
  },
  {
    title: "HackRust 1.0 Participant",
    institution: "DCRUST Murthal / Unstop",
    date: "2024",
    link: "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1775670835/2e2fcb53-4440-40f4-84ab-c7f40c549beb_page-0001_mxgkbz.jpg",
  },
  {
    title: "Protex: Hack-2-Win Participant",
    institution: "Protege, IGDTUW",
    date: "2024",
    link: "https://res.cloudinary.com/dhbxrjpgc/image/upload/v1775670849/2b8d7f57-cc41-4c48-9767-f0901ae7a557_page-0001_fwjqbx.jpg",
  },
];
