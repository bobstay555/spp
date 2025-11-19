"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

// Placeholder icon kept as-is, only labeling changed later
const McLarenF1BadgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 92 56" fill="currentColor" {...props}>
    <path d="M53,27.9c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.2-0.6-0.7-0.6-1.2c0-0.5,0.2-0.9,0.5-1.2c0.2-0.2,0.4-0.3,0.6-0.3H54h0.1c0.4,0,0.8,0.2,1,0.6
    ... (UNCHANGED ICON PATHS) ...
    "/>
  </svg>
);

const MissionStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-primary-background text-text-secondary py-16 lg:py-32 snap-start h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="flex flex-col items-center text-center">
          
          {/* icon and label */}
          <div className="mb-8 flex flex-col items-center">
            <McLarenF1BadgeIcon className="h-14 w-auto mb-4 text-text-secondary/80" />
            <p className="text-xs uppercase tracking-wider font-medium text-text-tertiary">
              SMILE PIC PHOTOGRAPHY • SINCE 2020
            </p>
          </div>

          {/* main animated heading */}
          <motion.h2
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-body text-4xl lg:text-[6rem] leading-tight font-bold"
          >
            
            <div className="overflow-hidden py-1">
              <motion.div variants={lineVariants}>
                CAPTURING <span className="text-primary font-accent">MOMENTS</span>,
              </motion.div>
            </div>

            <div className="overflow-hidden py-1">
              <motion.div variants={lineVariants}>
                PRESERVING <span className="text-primary font-accent">MEMORIES</span>,
              </motion.div>
            </div>

            <div className="overflow-hidden py-1">
              <motion.div variants={lineVariants}>
                CREATING STORIES THAT LAST
              </motion.div>
            </div>

            <div className="overflow-hidden py-1">
              <motion.div variants={lineVariants}>
                PHOTOGRAPHY THAT SPEAKS
              </motion.div>
            </div>

            <div className="overflow-hidden py-1">
              <motion.div variants={lineVariants}>
                EMOTION, BEAUTY & TRUTH.
              </motion.div>
            </div>

            <div className="overflow-hidden py-1">
              <motion.div variants={lineVariants}>
                THIS IS <span className="text-primary font-accent">SMILE PIC</span>.
              </motion.div>
            </div>

          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
