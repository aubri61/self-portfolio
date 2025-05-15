// components/FadeInOnceSection.tsx
'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const FadeInSection = ({ children }: Props) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (inView) setHasBeenInView(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasBeenInView ? { opacity: 1, y: 0, transition: { duration: 0.6 } } : {}}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;


// // components/FadeInSection.tsx
// "use client";

// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect, Ref } from "react";

// type Props = {
//   children: React.ReactNode;
//   triggerOnce?: boolean; // true면 다시 안 사라짐, false면 다시 사라짐
//   ref?: Ref<HTMLDivElement>;
// };

// const FadeInSection = ({ children, triggerOnce = false }: Props) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce });

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
//     } else if (!triggerOnce) {
//       controls.start({ opacity: 0, y: 20 });
//     }
//   }, [controls, inView, triggerOnce]);

//   return (
//     <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls}>
//       {children}
//     </motion.div>
//   );
// };

// export default FadeInSection;
