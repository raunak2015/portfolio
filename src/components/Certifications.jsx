import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import { certifications } from "../constants";
import CertificateModal from "./CertificateModal";
import { Award, Search, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const total = certifications.length;

  return (
    <section id="certifications" className="py-24 px-4 sm:px-12 lg:px-24 relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#7c3aed] opacity-30"></div>
            <h2 className="text-white text-2xl font-bold uppercase tracking-[0.3em]">
              Certifications
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#7c3aed] opacity-30"></div>
          </div>
          <p className="text-white/40 font-mono text-sm tracking-widest uppercase"> Professional Achievements &amp; Verified Credentials </p>
        </div>

        {/* Slide Counter Pill */}
        <div className="flex justify-center mb-6">
          <div className="px-5 py-1.5 rounded-full bg-[#7c3aed]/80 text-white text-sm font-bold font-mono tracking-widest shadow-lg shadow-[#7c3aed]/20">
            {activeIndex + 1} of {total}
          </div>
        </div>

        {/* 3D Carousel */}
        <div className="w-full py-6 relative">
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, el: ".certs-pagination" }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="certificates-swiper !pb-4"
          >
            {certifications.map((cert, index) => (
              <SwiperSlide
                key={index}
                className="!w-[280px] sm:!w-[360px] h-[460px] sm:h-[520px]"
              >
                <div
                  onClick={() => openModal(cert)}
                  className="w-full h-full bg-[#1a1443] rounded-2xl border border-white/10 overflow-hidden flex flex-col group cursor-pointer hover:border-[#7c3aed]/60 transition-all duration-500 shadow-2xl cert-card"
                >
                  {/* Certificate Image */}
                  <div className="relative flex-1 bg-[#100d2b] p-2 sm:p-3 overflow-hidden">
                    <img
                      src={cert.link}
                      alt={cert.title}
                      className="w-full h-full object-contain rounded-lg shadow-inner group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                      <div className="p-3 rounded-full bg-[#7c3aed] text-white shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-400">
                        <Search size={22} />
                      </div>
                    </div>
                  </div>

                  {/* Text Details Area */}
                  <div className="p-5 bg-[#1a1443] border-t border-white/5 relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 rounded-md bg-[#7c3aed]/20 text-[#7c3aed]">
                        <Award size={14} />
                      </div>
                      <span className="text-[#16f2b3] font-mono text-[10px] uppercase tracking-widest font-bold truncate">
                        {cert.institution}
                      </span>
                    </div>
                    <h3 className="text-white text-sm font-bold mb-3 line-clamp-2 leading-tight group-hover:text-[#16f2b3] transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex justify-between items-center text-[10px] font-mono text-white/40">
                      <span>{cert.date}</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase tracking-tighter">Verified</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="certs-pagination flex justify-center mt-4 gap-2"></div>

          {/* Custom Prev/Next Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-all duration-300"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-all duration-300"
              aria-label="Next certificate"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cert={selectedCert}
      />

      <style>{`
        .certificates-swiper .swiper-pagination-bullet {
          background: rgba(124, 58, 237, 0.4);
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
          opacity: 1;
        }
        .certificates-swiper .swiper-pagination-bullet-active {
          background: #7c3aed;
          width: 24px;
          border-radius: 4px;
        }
        .certs-pagination .swiper-pagination-bullet {
          background: rgba(124, 58, 237, 0.4);
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
          opacity: 1;
          display: inline-block;
          border-radius: 50%;
          margin: 0 3px;
        }
        .certs-pagination .swiper-pagination-bullet-active {
          background: #7c3aed;
          width: 24px;
          border-radius: 4px;
        }
        .certificates-swiper .swiper-slide-active .cert-card {
          border-color: rgba(124, 58, 237, 0.5);
          box-shadow: 0 0 30px rgba(124, 58, 237, 0.2), 0 20px 60px rgba(0,0,0,0.5);
        }
        .certificates-swiper .swiper-slide-shadow-left,
        .certificates-swiper .swiper-slide-shadow-right {
          background-image: linear-gradient(to left, rgba(13, 18, 36, 0.6), transparent) !important;
          border-radius: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Certifications;

// cert grid config

// patch7
