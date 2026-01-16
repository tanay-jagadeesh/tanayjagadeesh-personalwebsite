"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

/**
 * Lightweight scroll animation wrapper - applies transforms only, no visual styling changes
 */
export const ContainerTextScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scale from smaller to full size as we scroll
  const scaleDimensions = () => (isMobile ? [0.8, 1] : [0.9, 1]);

  // Tilt forward from bottom: start -20°, end 0° (straight)
  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]); // moves up

  return (
    <div
      ref={containerRef}
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX: rotate,
          scale,
          translateY,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
