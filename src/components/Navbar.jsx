import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full flex items-center py-5 fixed top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-primary/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
                }`}
        >
            <div className="w-full justify-between items-center max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-2 md:grid-cols-3">
                
                {/* Logo / Monogram */}
                <div className="flex justify-start">
                    <Link
                        to="/"
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm bg-white/5 group hover:bg-white/10 transition-colors">
                            <span className="text-white text-sm font-mono font-bold tracking-wider group-hover:text-accent transition-colors">RM</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation (Centered) */}
                <ul className="list-none hidden md:flex flex-row gap-8 justify-center items-center">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-secondary"
                                } hover:text-white text-[13px] uppercase tracking-[0.2em] font-mono cursor-pointer transition-colors duration-300`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Status Pill (Desktop only for neatness, or mobile menu toggle) */}
                <div className="hidden sm:flex justify-end items-center">
                    <a href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-white/80 text-xs font-mono lowercase tracking-wide">Available for hire</span>
                    </a>
                </div>

                {/* Mobile Navigation Toggle */}
                <div className="sm:hidden flex justify-end items-center">
                    <div
                        className="w-[28px] h-[28px] object-contain cursor-pointer z-50 text-white"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <X size={24} /> : <Menu size={24} />}
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-[#09090b] border border-white/10 backdrop-blur-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-mono uppercase tracking-wider cursor-pointer text-[12px] ${active === nav.title ? "text-accent" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
