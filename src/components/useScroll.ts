import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

type Threshold = number | number[];

const useScroll = (threshold: Threshold = 0.07) => {
  const [element, view] = useInView({ threshold });

  const controls = useAnimation();

  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }

  return [element, controls] as const;
};

export default useScroll;
