import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Maximize2 } from "lucide-react";

const ResumeViewer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0d1224]/90 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl h-[90vh] glass-container border-t-2 border-l-2 border-white/10 overflow-hidden flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#ec4899] flex items-center justify-center text-white">
                <Maximize2 size={16} />
              </div>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm">
                Raunak_Shahu_Resume.pdf
              </h3>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-white/5 relative">
            <iframe
              src="https://drive.google.com/file/d/18IbMqUGHRzSD8ErHfvlbTLr_legnCyhT/preview"
              className="w-full h-full border-none"
              title="Resume Viewer"
              allow="autoplay"
            />
          </div>

          {/* Footer Warning (Requirement: No Auto-Download) */}
          <div className="p-4 bg-white/5 border-t border-white/10 text-center">
            <p className="text-white/40 text-[10px] uppercase tracking-widest">
              Professional Interactive Viewer • Secure Access
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeViewer;
