import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const CertificateModal = ({ isOpen, onClose, cert }) => {
  if (!isOpen || !cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-2xl"
        />

        {/* Modal Card — unified style like the reference */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#12103a] border border-[#7c3aed]/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(124,58,237,0.25)] z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
          >
            <X size={18} />
          </button>

          {/* Certificate Image — large and prominent */}
          <div className="bg-[#0d0b2b] p-4 sm:p-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <img
                src={cert.link}
                alt={cert.title}
                className="w-full h-auto max-h-[55vh] object-contain"
              />
              {/* Subtle neon border glow */}
              <div className="absolute inset-0 rounded-2xl border border-[#7c3aed]/20 pointer-events-none" />
            </div>
          </div>

          {/* Info Footer */}
          <div className="px-6 pb-6 pt-3 flex flex-col gap-1 bg-[#12103a]">
            <h3 className="text-white text-lg font-bold leading-tight">{cert.title}</h3>
            <p className="text-[#16f2b3] text-sm font-mono">{cert.institution}</p>

            {/* Separator dot */}
            <div className="flex justify-center my-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]/60" />
            </div>

            {/* Action Row */}
            <div className="flex justify-between items-center">
              <span className="text-white/40 font-mono text-xs uppercase tracking-widest">{cert.date}</span>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform shadow-lg"
              >
                <ExternalLink size={14} />
                Verify Original
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
