import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { usePromptToInstall } from '../../../hooks/usePromptToInstall';

const InstallPromp: FunctionComponent = () => {
  const { deferredEvt } = usePromptToInstall();

  return (
    <>
      {deferredEvt && (
        <div className={styles.promptContainer} onClick={deferredEvt?.prompt}>
          <div>Хотіли б встановити наш додаток для доступу в офлайні?</div>
          <div className={styles.promptIcons}>
            <FontAwesomeIcon icon={faDownload} size={'lg'} />
          </div>
        </div>
      )}
    </>
  );
};

export default InstallPromp;
