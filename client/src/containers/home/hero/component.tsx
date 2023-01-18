import { useMemo, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import { useWindowSize, useInterval } from 'usehooks-ts';

const BACKGROUNDS = [
  'url(/images/hero/hero-1.jpg)',
  'url(/images/hero/hero-2.jpg)',
  'url(/images/hero/hero-3.jpg)',
  'url(/images/hero/hero-4.jpg)',
  'url(/images/hero/hero-5.jpg)',
  'url(/images/hero/hero-6.jpg)',
  'url(/images/hero/hero-7.jpg)',
  'url(/images/hero/hero-8.jpg)',
];

const Hero = () => {
  const backgroundsRef = useRef<string[]>([]);
  const DURATION = 2;
  const TOTAL_DURATION = 8;
  const [count, setCount] = useState<number>(0);
  const { width, height } = useWindowSize();

  useInterval(() => {
    setCount(count + 1);
  }, TOTAL_DURATION * 1000);

  const randomImage = () => {
    const bg = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];

    if (backgroundsRef.current.includes(bg)) {
      return null;
    }

    backgroundsRef.current.push(bg);
    return bg;
  };

  const ITEMS = useMemo(() => {
    const w = width;
    const h = height;

    if (!w || !h) {
      return null;
    }

    const ROW_COUNT = 3;
    const SIZE = h / ROW_COUNT;
    const ITEMS_PER_ROW = Math.floor((w * 1.5) / SIZE);
    const COUNT = ITEMS_PER_ROW * ROW_COUNT;

    backgroundsRef.current = [];

    return [...Array(COUNT)].map((_, i) => {
      const random = Math.random();

      const backgroundColor = `hsl(${random * 360}, 100%, 50%)`;
      const backgroundImage = randomImage();
      const backgroundImageThreshold = 0.25;

      return (
        <div
          key={`${i}-${count}`}
          className="relative"
          style={{
            width: SIZE,
            height: SIZE,
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: DURATION,
              ease: 'linear',
              delay: random * (TOTAL_DURATION - DURATION),
            }}
            className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
            style={{
              backgroundColor,
              ...(Math.random() >= backgroundImageThreshold &&
                backgroundImage && {
                  backgroundImage,
                }),
            }}
          />
        </div>
      );
    });
  }, [width, height, count]);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 className="text-8xl">Foodscapes</h1>
        <h2 className="uppercase">Accelerating a global food system transfomation</h2>
      </div>

      <div className="absolute top-0 -left-1/4 z-0 h-full w-[150%]">
        <div className="flex h-full flex-wrap items-center justify-center">
          {/* Create an array of 15 eelement and loop over it */}
          {ITEMS}
        </div>
      </div>
    </section>
  );
};

export default Hero;
