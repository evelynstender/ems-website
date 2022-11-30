'use client';
import { motion } from 'framer-motion';

const Hello = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2, delay: 0 }}
      className="-mt-32"
    >
      Hello 👋
    </motion.div>
  );
};

export default Hello;
