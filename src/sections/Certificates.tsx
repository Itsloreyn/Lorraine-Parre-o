import React from 'react';
import { motion } from 'motion/react';
import { Award, Eye } from 'lucide-react';
import { CertificateItem } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { SafeImage } from '../components/SafeImage';

interface CertificatesProps {
  certificates: CertificateItem[];
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const Certificates: React.FC<CertificatesProps> = ({
  certificates,
  onSelectCertificate,
}) => {
  return (
    <section
      id="certificates"
      className="py-20 sm:py-28 bg-[#FCEEF2]/65 dark:bg-[#1E191C] border-t border-[#F4C8D5]/70 dark:border-white/[0.08]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          number="05"
          title="Certificates & Achievements"
          subtitle="Training credentials, seminars, and academic recognition slots ready for verified certificate uploads."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl bg-white dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.09] shadow-[0_10px_28px_-18px_rgba(217,140,165,0.28)] overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-[#D98CA5]"
            >
              <div>
                {/* Archival Certificate Preview */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#FFF9F7] via-[#FCEEF2]/60 to-[#E8D5C4]/35 dark:from-[#261E24] dark:to-[#1C161A] border-b border-[#F4C8D5]/70 dark:border-white/[0.08]">
                  {cert.imageSrc ? (
                    <SafeImage
                      src={cert.imageSrc}
                      alt={cert.imageAlt}
                      fallbackTitle={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      containerClassName="w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full p-5 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-display italic text-xs tabular-nums text-[#6E5B68] dark:text-[#C7B6C1]">
                          0{idx + 1}
                        </span>
                        <Award
                          className="w-5 h-5 text-[#B45D7B] dark:text-[#E69FB5]"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="h-px w-8 bg-[#D98CA5]" aria-hidden="true" />
                        <p className="font-display text-[15px] font-semibold text-[#40313D] dark:text-[#FAF5F7] line-clamp-2 leading-snug">
                          {cert.title}
                        </p>
                      </div>

                      <p className="font-mono text-[11px] tabular-nums text-[#6E5B68] dark:text-[#C7B6C1]">
                        {cert.dateIssued}
                      </p>
                    </div>
                  )}
                </div>

                {/* Metadata */}
                <div className="p-5 space-y-2">
                  <p className="text-xs text-[#6E5B68] dark:text-[#C7B6C1]">
                    {cert.issuer} <span aria-hidden="true">·</span>{' '}
                    <span className="font-mono tabular-nums">{cert.dateIssued}</span>
                  </p>
                  <h3 className="font-display text-base font-semibold text-[#40313D] dark:text-[#FAF5F7] leading-snug text-balance">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectCertificate(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#F4C8D5] dark:border-white/[0.12] bg-[#FFF9F7] dark:bg-[#1C161A] text-[#40313D] dark:text-[#FAF5F7] hover:bg-[#FCEEF2] hover:border-[#D98CA5] hover:text-[#B45D7B] dark:hover:bg-[#2C2229] dark:hover:text-[#E69FB5] text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  <span>View Certificate</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
