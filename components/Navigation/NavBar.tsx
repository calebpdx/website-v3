"use client";

import { LinkType } from "@/sanity/types/navigation";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const navContainer = {
  show: {
    transition: {
      staggerChildren: 0.075,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

const NavBar = ({ data }: { data: LinkType[] }) => {
  return (
    <nav className="hidden items-center lg:flex">
      <motion.ul
        className="hidden lg:flex gap-6"
        initial="hidden"
        animate="show"
        variants={navContainer}
      >
        {data.map((link: LinkType, index: number) => {
          return (
            <motion.li key={`${link.title}-${index}`} variants={navItem}>
              <NavLink link={link} />
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavBar;
