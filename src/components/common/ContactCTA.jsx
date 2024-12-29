import React, { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useScroll,
  useInView,
} from "framer-motion";
import { cn } from "@/utils/cn";

const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

const AnimatedButton = ({
  borderRadius = "1.75rem",
  children,
  className,
  containerClassName,
  borderClassName,
  duration,
  href,
  ...otherProps
}) => {
  return (
    <Link href={href}>
      <button
        className={cn(
          "bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden",
          containerClassName
        )}
        style={{
          borderRadius: borderRadius,
        }}
        {...otherProps}
      >
        <div
          className="absolute inset-0"
          style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        >
          <MovingBorder duration={duration} rx="30%" ry="30%">
            <div
              className={cn(
                "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--logo-color)_40%,transparent_60%)]",
                borderClassName
              )}
            />
          </MovingBorder>
        </div>
        <div
          className={cn(
            "relative bg-white/[0.8] dark:bg-black/[0.8] border border-neutral-200 dark:border-slate-800 backdrop-blur-xl text-black dark:text-white flex items-center justify-center w-full h-full text-lg antialiased",
            className
          )}
          style={{
            borderRadius: `calc(${borderRadius} * 0.96)`,
          }}
        >
          {children}
        </div>
      </button>
    </Link>
  );
};

const ContactCTA = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  return (
    <div
      ref={containerRef}
      className="relative bg-white dark:bg-black container overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 -translate-y-1">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, var(--text-color, rgba(0,0,0,0.1)) 1px, transparent 1px),
                             linear-gradient(to bottom, var(--text-color, rgba(0,0,0,0.1)) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            opacity: 0.1,
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)'
          }}
        />
      </div>

      {/* Vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(var(--vignette-color), 0) 0%, rgba(var(--vignette-color), 0.2) 40%, rgba(var(--vignette-color), 0.8) 80%)',
          '--vignette-color': 'var(--is-dark) ? 0,0,0 : 255,255,255'
        }}
      />

      {/* Content */}
      <div className="relative flex items-center justify-center h-[50vh]">
        <motion.div
          className="text-center space-y-8 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.2
            }
          } : {}}
        >
          <motion.h2
            className="text-5xl font-semibold text-black dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.3
              }
            } : {}}
          >
            Ready to start your project?
          </motion.h2>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.4
              }
            } : {}}
          >
            <AnimatedButton
              containerClassName="w-48"
              className="bg-white/80 dark:bg-black/80 hover:bg-white/60 dark:hover:bg-black/60 text-black dark:text-white transition-colors"
              href="/contact"
            >
              Let's Talk
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactCTA;
