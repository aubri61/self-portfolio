"use client";

import FadeInSection from "@/components/FadeInSection";
import { useSectionInView } from "@/lib/hooks";
import SectionTitle from "@/components/SectionTitle";

import { skillTagsData } from "@/lib/data";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills({ params }: { params?: {} }) {
  const { ref } = useSectionInView("Skills");

  return (
    <FadeInSection>
      <section
        ref={ref}
        className="w-full sm:w-[50rem] flex flex-col justify-center scroll-mt-30"
        id="skills"
      >
        <SectionTitle params={{ title: "Skills" }} />

        <ul className="flex flex-wrap justify-center gap-2 text-base sm:text-[1.1rem] text-gray-800 mt-10">
          {skillTagsData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-lg px-3 py-2 dark:bg-white/10 dark:text-white/80 border-1 border-gray-200"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
    </FadeInSection>
  );
}
