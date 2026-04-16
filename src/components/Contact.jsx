import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Code2, CheckCircle, XCircle } from "lucide-react";
import { socialLinks } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-grid relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#ec4899] opacity-30"></div>
          <h2 className="text-white text-2xl font-bold uppercase tracking-[0.3em]">
            Contact Me
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#ec4899] opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-container p-8 border-t-2 border-l-2 border-white/10"
          >
            <h3 className="text-white text-xl font-bold mb-8">Send me a message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm font-bold uppercase tracking-widest">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-white/5 border border-white/10 rounded-lg py-4 px-6 text-white outline-none focus:border-[#ec4899] transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm font-bold uppercase tracking-widest">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-lg py-4 px-6 text-white outline-none focus:border-[#ec4899] transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm font-bold uppercase tracking-widest">Your Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="bg-white/5 border border-white/10 rounded-lg py-4 px-6 text-white outline-none focus:border-[#ec4899] transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-4 py-4 rounded-full bg-gradient-to-r from-[#ec4899] to-[#7c3aed] text-white font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#ec4899]/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Success Message */}
              {status === "success" && (
                <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-[#16f2b3]/10 border border-[#16f2b3]/30 text-[#16f2b3]">
                  <CheckCircle size={18} />
                  <p className="text-sm font-medium">Message sent! I'll get back to you soon. 🎉</p>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-[#ec4899]/10 border border-[#ec4899]/30 text-[#ec4899]">
                  <XCircle size={18} />
                  <p className="text-sm font-medium">Something went wrong. Please try emailing directly.</p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Right Column: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-8">
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#16f2b3] group-hover:bg-[#16f2b3] group-hover:text-white transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest">Email</h4>
                     <a href="mailto:raunakshahu.cg@gmail.com" className="text-white text-lg hover:text-[#16f2b3] transition-colors">raunakshahu.cg@gmail.com</a>
                  </div>
               </div>

               <div className="flex items-center gap-6 group">
                   <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#16f2b3] group-hover:bg-[#16f2b3] group-hover:text-white transition-all duration-500">
                     <Github size={24} />
                   </div>
                   <div>
                     <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest">GitHub</h4>
                     <a href="https://github.com/raunak2015" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-[#16f2b3] transition-colors">github.com/raunak2015</a>
                   </div>
                </div>

               <div className="flex items-center gap-6 group">
                   <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#16f2b3] group-hover:bg-[#16f2b3] group-hover:text-white transition-all duration-500">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest">Location</h4>
                     <p className="text-white text-lg">Gandhinagar, Gujarat, India</p>
                   </div>
                </div>
            </div>

            {/* Social Icons (Requirement 5.12) */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-all duration-300 text-white"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            
            {/* Decorative Glow */}
            <div className="w-64 h-64 bg-[#7c3aed]/10 blur-[100px] rounded-full absolute -z-10 bottom-0 right-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
