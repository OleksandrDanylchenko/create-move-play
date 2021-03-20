import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import {
  introButtonVariants,
  introHeaderVariants,
  introSectionVariants
} from './framerMotionAnimations';
import { Link } from 'react-router-dom';

const IntroView: FunctionComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <article className={styles.info}>
        <motion.header
          initial={'initial'}
          animate={'in'}
          exit={'out'}
          variants={introHeaderVariants}
          className={styles.header}
        >
          <h1>
            Створюй.
            <br />
            Рухайся.
            <br />
            Грай.
          </h1>
        </motion.header>
        <motion.section
          initial={'initial'}
          animate={'in'}
          exit={'out'}
          variants={introSectionVariants}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={styles.section}
        >
          <p>
            Приєднуйся до нас,
            <br />
            виконуй вправи та вигравай цінні призи
          </p>
        </motion.section>
        <Link to={'/user'} className={styles.questionnaireButtonLink}>
          <motion.button
            initial={'initial'}
            animate={'in'}
            exit={'out'}
            whileTap={'onTap'}
            variants={introButtonVariants}
            className={styles.questionnaireButton}
          >
            Пройти опитування
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </motion.button>
        </Link>
      </article>
    </motion.div>
  );
};

export default IntroView;
