import React, { FunctionComponent } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './styles.module.scss';

const SuspenseLoader: FunctionComponent = () => (
  <div className={styles.dimmer}>
    <Loader type="Puff" color={'black'} width={150} height={150} />
    <span className={styles.suspenseText}>Завантаження...</span>
  </div>
);

export default SuspenseLoader;
