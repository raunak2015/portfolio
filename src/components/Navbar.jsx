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
            if (scrollTop > 50) {
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
            className={`w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-[#0d1224]/80 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-12">
                
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <span className="text-[#16f2b3] font-bold text-2xl tracking-tighter uppercase">
                        RAUNAK <span className="text-white">SHAHU</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="list-none hidden lg:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? "text-[#16f2b3]" : "text-white/70"
                            } hover:text-[#16f2b3] text-sm font-bold uppercase tracking-widest cursor-pointer transition-colors duration-300`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation Toggle */}
                <div className="lg:hidden flex flex-1 justify-end items-center">
                    <div
                        className="w-[28px] h-[28px] object-contain cursor-pointer text-white"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <X size={24} /> : <Menu size={24} />}
                    </div>

                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl glass-container border border-white/10 shadow-2xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-bold uppercase tracking-widest cursor-pointer text-sm ${
                                        active === nav.title ? "text-[#16f2b3]" : "text-white/70"
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

// navbar padding tweaks
