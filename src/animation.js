export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      staggerChildren: 0.5,
    },
  },
};

export const textVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const subheadingVariants = {
  leftToRight: {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  },
  rightToLeft: {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  },
};

export const buttonHover = {
  rest: {},
  hover: {
    opacity: 1,
    background: 'black',
  },
};

export const buttonTextHover = {
  rest: {
    color: 'black',
  },
  hover: {
    color: 'white',
  },
};
