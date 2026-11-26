import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Award, X } from 'lucide-react';
import { CertificateItem } from '../data/portfolio';
import { SafeImage } from './SafeImage';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
}) => {
  useEffect(() => {
    if (!certificate) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#40313D]/55 dark:bg-black/65 backdrop-blur-xs"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.1] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#F4C8D5]/70 dark:border-white/[0.08]">
              <div className="text-sm text-[#6E5B68] dark:text-[#C7B6C1] truncate">
                {certificate.issuer} <span aria-hidden="true">·</span> {certificate.dateIssued}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close certificate preview"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#F4C8D5] dark:border-white/[0.1] text-[#40313D] dark:text-[#FAF5F7] hover:bg-[#FCEEF2] dark:hover:bg-[#2E242B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {certificate.imageSrc ? (
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#F4C8D5]/80 dark:border-white/[0.08] bg-[#FFF9F7] dark:bg-[#1C161A]">
                  <SafeImage
                    src={certificate.imageSrc}
                    alt={certificate.imageAlt}
                    fallbackTitle={certificate.title}
                    className="w-full h-full object-contain"
                    containerClassName="w-full h-full"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] w-full rounded-xl border border-[#F4C8D5] dark:border-white/[0.1] bg-gradient-to-br from-[#FFF9F7] via-[#FCEEF2]/65 to-[#E8D5C4]/35 dark:from-[#261E24] dark:to-[#1C161A] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-[#F4C8D5]/70 dark:border-white/[0.08] pb-4">
                    <span className="font-mono text-xs text-[#6E5B68] dark:text-[#C7B6C1]">
                      Certificate Preview Placeholder
                    </span>
                    <Award className="w-6 h-6 text-[#B45D7B] dark:text-[#E69FB5]" aria-hidden="true" />
                  </div>

                  <div className="my-auto text-center max-w-lg mx-auto space-y-3 py-6">
                    <p className="text-sm text-[#6E5B68] dark:text-[#C7B6C1]">
                      {certificate.issuer}
                    </p>
                    <h4 className="font-display text-2xl sm:text-3xl font-semibold text-[#40313D] dark:text-[#FAF5F7] text-balance">
                      {certificate.title}
                    </h4>
                    <p className="text-sm font-mono tabular-nums text-[#B45D7B] dark:text-[#E69FB5]">
                      Issued: {certificate.dateIssued}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F4C8D5]/70 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-xs text-[#6E5B68] dark:text-[#C7B6C1]">
                    <span>Awaiting uploaded certificate file</span>
                    <span className="font-mono">public/certificates/</span>
                  </div>
                </div>
              )}

              <div>
                <h3
                  id="certificate-modal-title"
                  className="font-display text-xl sm:text-2xl font-semibold text-[#40313D] dark:text-[#FAF5F7]"
                >
                  {certificate.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#6E5B68] dark:text-[#C7B6C1]">
                  {certificate.credentialNote}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
