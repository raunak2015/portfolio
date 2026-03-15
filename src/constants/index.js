import { Code, Database, Brain, Rocket } from "lucide-react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

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
        name: "AI Code Assistant",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "text-blue-500",
            },
            {
                name: "mongodb",
                color: "text-green-500",
            },
            {
                name: "tailwind",
                color: "text-pink-500",
            },
        ],
        image: project1,
        source_code_link: "https://github.com/",
        demo_link: "https://github.com/",
    },
    {
        name: "E-Commerce Platform",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "text-blue-500",
            },
            {
                name: "restapi",
                color: "text-green-500",
            },
            {
                name: "scss",
                color: "text-pink-500",
            },
        ],
        image: project2,
        source_code_link: "https://github.com/",
        demo_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "text-blue-500",
            },
            {
                name: "supabase",
                color: "text-green-500",
            },
            {
                name: "css",
                color: "text-pink-500",
            },
        ],
        image: project3,
        source_code_link: "https://github.com/",
        demo_link: "https://github.com/",
    },
];
