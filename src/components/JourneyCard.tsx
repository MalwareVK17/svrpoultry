import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface JourneyCardProps {
  year: string;
  title: string;
  description: string;
  image: string; // background image to reveal
  gradient?: string; // tailwind gradient classes used for year badge
}

const EASE = [0.25, 1, 0.5, 1] as const; // cubic-bezier easing

function useIsTouch(): boolean {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);
  return isTouch;
}

export default function JourneyCard({ year, title, description, image, gradient }: JourneyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouch();
  const [revealed, setRevealed] = useState(false); // image revealed state
  const [expanded, setExpanded] = useState(false);
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);

  // Hover handlers for desktop
  const onEnter = () => !isTouch && setRevealed(true);
  const onLeave = () => !isTouch && !expanded && setRevealed(false);

  // Tap / Click logic
  const handleCardClick = () => {
    if (!revealed) {
      setRevealed(true);
      return;
    }
    // When image is visible, expand
    if (ref.current) {
      setOriginRect(ref.current.getBoundingClientRect());
      setExpanded(true);
    }
  };

  const closeExpanded = useCallback(() => {
    setExpanded(false);
    // after expand anim ends, keep reveal or not? go back to non-revealed for clarity
    setTimeout(() => setRevealed(false), 250);
  }, []);

  // Overlay for expanded view rendered via portal
  const Overlay = useMemo(() => {
    if (!expanded || !originRect) return null;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Target size: responsive
    const targetWidth = Math.min(vw * 0.92, 900);
    const targetHeight = Math.min(vh * 0.85, 620);
    const targetX = (vw - targetWidth) / 2;
    const targetY = Math.max((vh - targetHeight) / 2, 24);

    const duration = 0.95; // 0.8s–1.2s

    return createPortal(
      <AnimatePresence>
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 bg-black/60"
            onClick={closeExpanded}
            aria-label="Close expanded card"
          />

          {/* Expanding panel */}
          <motion.div
            key="panel"
            className="fixed z-50 overflow-hidden rounded-2xl shadow-2xl bg-background"
            style={{ left: 0, top: 0 }}
            initial={{ x: originRect.left, y: originRect.top, width: originRect.width, height: originRect.height, borderRadius: 16 }}
            animate={{ x: targetX, y: targetY, width: targetWidth, height: targetHeight, borderRadius: 16 }}
            exit={{ x: originRect.left, y: originRect.top, width: originRect.width, height: originRect.height, borderRadius: 16 }}
            transition={{ duration, ease: EASE }}
            role="dialog"
            aria-modal="true"
          >
            {/* Image background */}
            <motion.img
              src={image}
              alt={`${title} (${year})`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.02, opacity: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/60 to-background/10" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className={`w-16 h-20 bg-gradient-to-b ${gradient ?? 'from-primary to-primary/70'} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <div className="w-12 h-12 bg-black/80 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{year}</span>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{title}</h3>
                </div>
                <button
                  onClick={closeExpanded}
                  className="inline-flex items-center justify-center rounded-full p-2 bg-background/70 hover:bg-background/90 shadow border border-border transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-4 sm:px-6 pb-6 mt-auto">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                  className="bg-background/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow border border-border"
                >
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{description}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      </AnimatePresence>,
      document.body
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, originRect, image, title, year, gradient]);

  return (
    <>
      <motion.div
        ref={ref}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={handleCardClick}
        className="relative cursor-pointer select-none"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.25, ease: EASE }}
        aria-label={`${title} (${year})`}
      >
        {/* Background image layer */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          initial={false}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <img src={image} alt={`${title} background`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Foreground default content (year + title) */}
        <div className="relative z-10">
          <div className="text-center p-4">
            <motion.div
              initial={false}
              animate={{ opacity: revealed ? 0 : 1, y: revealed ? -8 : 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <div className={`w-20 h-24 bg-gradient-to-b ${gradient ?? 'from-primary to-primary/70'} rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg`}>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">{year}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
            </motion.div>
          </div>
        </div>

        {/* Hover hint / CTA when revealed */}
        <motion.div
          className="absolute inset-0 z-10 flex items-end justify-center p-3"
          initial={false}
          animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 8 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <span className="text-white text-xs bg-black/40 px-3 py-1 rounded-full shadow">Click to expand</span>
        </motion.div>

        {/* Card container styling */}
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow hover:shadow-xl transition-[box-shadow] duration-300" style={{ minHeight: 180 }} />
      </motion.div>

      {/* Expanded overlay */}
      {Overlay}
    </>
  );
}
