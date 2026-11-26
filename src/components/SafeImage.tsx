import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackTitle,
  className = 'w-full h-full object-cover',
  containerClassName = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-[#FCEEF2] text-[#6E5B68] dark:bg-[#231C21] dark:text-[#C7B6C1] p-6 text-center ${containerClassName}`}
      >
        <div className="w-11 h-11 rounded-2xl border border-[#F4C8D5] dark:border-white/10 bg-white/80 dark:bg-white/5 flex items-center justify-center">
          <ImageIcon className="w-5 h-5 text-[#B45D7B] dark:text-[#E69FB5]" aria-hidden="true" />
        </div>
        {fallbackTitle && (
          <p className="text-sm font-medium text-[#40313D] dark:text-[#FAF5F7] max-w-xs text-balance">
            {fallbackTitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
