import { motion } from "framer-motion";
import * as React from "react";

const FlagGameText: React.FC = () => (
    <motion.div
        className=" w-fit rounded-md bg-opacity-70 p-1 px-1.5 shadow-inner prose-h1:m-0 dark:ring-1 dark:ring-white "
        whileTap={{ scale: 0.98 }}
    >
        <h1 className="text-3xl font-medium cursor-pointer select-none lg:text-6xl ">
            The
        </h1>
        <h1 className="text-4xl font-semibold cursor-pointer select-none lg:text-6xl">
            Flag
        </h1>
        <h1 className="text-4xl font-black cursor-pointer select-none lg:text-6xl">
            Game
        </h1>
    </motion.div>
);

export default FlagGameText;
