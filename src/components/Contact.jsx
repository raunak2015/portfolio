import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you! Your message has been sent successfully.");
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error("EmailJS Error:", error);
                    alert(`Failed to send email. Error: ${error.text || error.message || "Unknown Error"}`);
                }
            );
    };

    return (
        <section id="contact" className="max-w-7xl mx-auto px-6 sm:px-12 py-32 border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <div className="flex items-center gap-4 mb-4">
                    <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em]">
                        / CONTACT
                    </p>
                    <div className="h-[1px] w-12 bg-accent/30"></div>
                </div>
                <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-serif">
                    Let's <span className="italic text-accent">talk.</span>
                </h2>
                <p className="mt-6 text-secondary font-sans text-lg max-w-xl font-light">
                    Interested in collaborating or have a role that fits my profile? Reach out directly or drop a message below.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 flex flex-col gap-8"
                >
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-8"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <label className="flex flex-col gap-3 group">
                                <span className="text-secondary font-mono text-xs uppercase tracking-widest group-focus-within:text-accent transition-colors">Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Jane Doe"
                                    className="bg-white/5 py-4 px-4 text-white font-sans font-light rounded-sm border border-white/10 outline-none focus:border-accent transition-colors placeholder:text-white/20"
                                    required
                                />
                            </label>
                            <label className="flex flex-col gap-3 group">
                                <span className="text-secondary font-mono text-xs uppercase tracking-widest group-focus-within:text-accent transition-colors">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="jane@example.com"
                                    className="bg-white/5 py-4 px-4 text-white font-sans font-light rounded-sm border border-white/10 outline-none focus:border-accent transition-colors placeholder:text-white/20"
                                    required
                                />
                            </label>
                        </div>
                        <label className="flex flex-col gap-3 group">
                            <span className="text-secondary font-mono text-xs uppercase tracking-widest group-focus-within:text-accent transition-colors">Message</span>
                            <textarea
                                rows="5"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                className="bg-white/5 py-4 px-4 text-white font-sans font-light rounded-sm border border-white/10 outline-none focus:border-accent transition-colors placeholder:text-white/20 resize-none"
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-white text-primary font-mono tracking-widest text-xs font-bold uppercase py-4 px-8 self-start hover:bg-accent hover:text-primary transition-colors duration-300 disabled:opacity-50 flex items-center gap-3"
                        >
                            {loading ? "Transmitting..." : "Send Message"}
                            {!loading && <Send size={14} />}
                        </button>
                    </form>
                </motion.div>

                {/* Direct Contact & Socials */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6"
                >
                    <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:-translate-y-1 hover:border-white/20 transition-all duration-300">
                        <Mail className="text-accent mb-6" size={28} />
                        <h4 className="text-secondary font-mono text-xs uppercase tracking-widest mb-2">Direct Email</h4>
                        <a href="mailto:raunakshahu.cg@gmail.com" className="text-white font-sans text-lg hover:text-accent transition-colors">
                            raunakshahu.cg@gmail.com
                        </a>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:-translate-y-1 hover:border-white/20 transition-all duration-300">
                        <div className="flex gap-4 items-center mb-6">
                            <Github className="text-secondary" size={24} />
                            <Linkedin className="text-secondary" size={24} />
                        </div>
                        <h4 className="text-secondary font-mono text-xs uppercase tracking-widest mb-2">Social Profiles</h4>
                        <div className="flex flex-col gap-2 mt-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white font-sans text-sm hover:text-accent transition-colors w-fit">
                                GitHub ↗
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white font-sans text-sm hover:text-accent transition-colors w-fit">
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
