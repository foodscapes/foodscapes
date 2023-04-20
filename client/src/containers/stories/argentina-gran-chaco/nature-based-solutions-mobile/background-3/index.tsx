import Image from 'next/image';

import { motion } from 'framer-motion';

const NatureBasedBackground3 = () => {
  return (
    <motion.div key="nature-based-background-3" className="fixed top-0 left-0 z-0 h-full w-full">
      <motion.div
        key="nature-based-background-img-3"
        className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden"
        initial={{ opacity: 0, y: 88 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.5, duration: 0.75 }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black/50" />
        <Image
          src="/images/stories/argentina-gran-chaco/granchaco-4.jpg"
          alt="Gran Chaco - corn"
          width={2400}
          height={1600}
          className="h-full w-full object-cover"
          priority
        />

        <div className="absolute bottom-3 left-3">
          <p className="text-xxs text-white">India.</p>
          <p className="text-xxs text-white">© Smita Sharma</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NatureBasedBackground3;
