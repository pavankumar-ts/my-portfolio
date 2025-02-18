import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const PageTransitionLayout = ({ children }) => {
  const router = useRouter();
  const blocks = [1, 2, 3, 4, 5]; // 5 vertical blocks

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <div key={router.route} className="relative">
          {/* Vertical Blocks */}
          <div className="fixed inset-0 z-50 flex">
            {blocks.map((block, i) => (
              <motion.div
                key={i}
                className="h-screen w-1/5 bg-primary"
                initial={{ scaleY: 0 }}
                animate={{
                  scaleY: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.4,
                  times: [0, 0.4, 0.6, 1],
                  ease: [0.645, 0.045, 0.355, 1],
                  delay: i * 0.1,
                }}
                style={{
                  originY: i % 2 === 0 ? 0 : 1, // Alternate between top and bottom
                }}
              />
            ))}
          </div>

          {/* Page Content */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.6,
            }}
          >
            {children}
          </motion.main>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransitionLayout;