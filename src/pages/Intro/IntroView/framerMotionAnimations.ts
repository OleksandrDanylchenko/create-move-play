import { Variants } from 'framer-motion';

export const introVariants = {
  initial: {
    x: '-100vw',
    scale: 0.5
  },
  in: {
    x: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.5 }
  },
  out: {
    x: '100vw',
    scale: 1.4,
    transition: { duration: 0.5 }
  }
};

export const introHeaderVariants: Variants = {
  initial: {
    ...introVariants.initial
  },
  in: {
    ...introVariants.in,
    transition: { ...introVariants.in.transition, delay: 0.2 }
  },
  out: {
    ...introVariants.out,
    transition: { ...introVariants.out.transition, delay: 0.2 }
  }
};

export const introSectionVariants: Variants = {
  initial: {
    ...introVariants.initial
  },
  in: {
    ...introVariants.in,
    transition: { ...introVariants.in.transition, delay: 0.5 }
  },
  out: {
    ...introVariants.out,
    transition: { ...introVariants.out.transition, delay: 0.5 }
  }
};

export const introButtonVariants: Variants = {
  initial: {
    ...introVariants.initial
  },
  in: {
    ...introVariants.in,
    transition: { ...introVariants.in.transition, delay: 0.8 }
  },
  out: {
    ...introVariants.out,
    transition: { ...introVariants.out.transition, delay: 0.8 }
  },
  onTap: {
    scale: 0.8,
    color: '#E4572E',
    borderColor: '#E4572E',
    transition: {
      ...introVariants.out.transition,
      scale: { delay: 0 },
      color: { duration: 0.2 },
      borderColor: { duration: 0.2 }
    }
  }
};
