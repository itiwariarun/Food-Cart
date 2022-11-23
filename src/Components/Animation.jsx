import React from "react";
import { motion } from "framer-motion";

function Animation({ children }) {
    const pageVariants = {
        initial: {
            opacity: 0,
            scaleX: -1,
        },
        in: {
            opacity: 1,
            scaleX: 1,
        },
        out: {
            ease: "linear",
        },
    };
    const pageTransition = {
        type: "tween",
        ease: "easeOut",
        duration: 0.2,
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
}

export default Animation;
