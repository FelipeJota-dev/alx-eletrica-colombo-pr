import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye } from 'lucide-react';

export default function RealTimeNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewerCount, setViewerCount] = useState(7);

  useEffect(() => {
    // Show notification after a few seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Randomly fluctuate viewer count slightly every 15-30 seconds
    const fluctuateInterval = setInterval(() => {
      setViewerCount((prev) => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const newCount = prev + change;
        return newCount < 3 ? 3 : (newCount > 12 ? 12 : newCount);
      });
    }, Math.random() * 15000 + 15000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(fluctuateInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40"
        >
          <div className="bg-[#1A1A1A] border border-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)] rounded-full py-2.5 px-4 flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-2.5 h-2.5 bg-green-500 rounded-full animate-ping opacity-75"></span>
              <span className="relative w-2.5 h-2.5 bg-green-500 rounded-full"></span>
            </div>
            <p className="text-white text-xs sm:text-sm font-medium">
              <span className="font-bold">{viewerCount}</span> pessoas vendo este site agora
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
