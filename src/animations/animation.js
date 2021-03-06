// header animations
export const iconVariants = {
    hidden: {
        opacity: 0,
        y: '-100px'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.65
        }
    }
}

export const navbarVariants = {
    hidden: {
        opacity: 0,
        y: '-100px'
    },
    visible: {
        opacity: 1,
        y: 0
    }
}
// hero animations

export const header = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: '0',
        transition: {
            type: 'spring',
            duration: 1,
        }
    }
}
export const text = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: '0',
        transition: {
            type: 'spring',
            duration: 1,
            delay: 0.2
        }
    }
}
export const button = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: '0',
        originX: 0,
        transition: {
            type: 'spring',
            duration: 1,
            delay: 0.3
        }
    }
}

export const titleVariants ={
    hidden: {
        opacity: 0,
        y: '100px',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1
        }
    }
}

export const descVariants ={
    hidden: {
        opacity: 0,
        y: '100px'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.1
        }
    }
}
export const parVariants ={
    hidden: {
        opacity: 0,
        y: '100px'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.2
        }
    }
}
export const buttonVariants ={
    hidden: {
        opacity: 0,
        y: '100px'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.3
        }
    }
}

// footer animations
export const footerVariants = {
    hidden: {
        y: -25,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

//  animations
export const imageVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 1.5
      }
    }
}

// projects animations
export const pagerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1
      }
    }
}
// skills animations
export const valuebarVariants = {
    hidden: {
        x: '-500px',
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.75,
            duration: 2
        }
    }
}
export const fullbarVariants = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

export const textVariants_2 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 2.75
        }
    }
}

// contact animations
export const containerVariants = {
    hidden: { opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.25,
        staggerChildren: 0.3,
        duration: 1
      }
    }
};

export const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.75
      }
    }
}

export const itemVariants = {
    hidden: { 
        x: '-20px', 
        opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
};

// sectiontext animations 
export const titleVariants_1 = {
    hidden: { y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.25
      }
    }
}
export const desciptionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5
      }
    }
}
export const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.75
      }
    }
}

export const priceVariants = {
    hidden: {x: -50, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
    }
}

export const modalVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export const messageVariants = {
    hidden: {
        y: -250,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.5
        }
    }
}

// trainerCard animation
export const trainerCardVariants = {
    hidden: {
        rotateY: 90,
        opacity: 0
    },
    visible: {
        rotateY: 0,
        opacity: 1,
        transition: {
            delay: 1.25,
            duratin: 5
        }
    }
}