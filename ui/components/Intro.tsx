'use client';

import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.5 }}
      className="-mt-16"
    >
      I'm Evelyn, a software engineer based in London - UK
    </motion.div>
  );
};

export default Intro;
