export const containerVariants = {
  subheading: {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 1,
        staggerDirection: -1,
      },
    },
  },
  heading: {
    hidden: {},
    show: {
      transition: {
        duration: 1,
        ease: 'easeOut',
        staggerChildren: 0.5,
      },
    },
  },
};

export const textAnimations = {
  subheading: {
    hidden: { opacity: 0, y: 50, color: 'black', mixBlendMode: 'unset' },
    show: {
      opacity: 1,
      y: 0,
      color: 'white',
      mixBlendMode: 'difference',
      transition: {
        duration: 0.6,
        color: { delay: 0.8 },
        mixBlendMode: { delay: 0.8 },
      },
    },
  },
  heading: {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },
};

export const subheadingAnimations = {
  leftToRight: {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  },
  rightToLeft: {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5 },
    },
  },
};
