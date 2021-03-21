import React, { FunctionComponent, useState } from 'react';
import { IBindingAction } from '../../../../../../../models/callbacks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import styles from './styles.module.scss';

interface SignOutButtonView {
  onSignOut: IBindingAction;
}

type SignOutButtonViewProps = SignOutButtonView;

const SignOutButtonView: FunctionComponent<SignOutButtonViewProps> = ({
  onSignOut
}) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const clearingConfirmation = (
    <span className={styles.clearConfirmation} onClick={onSignOut}>
      Я підтверджую видалення даних!
    </span>
  );

  return (
    <Tippy
      content={clearingConfirmation}
      visible={showConfirmationModal}
      interactive
      placement={'left'}
      onClickOutside={() => setShowConfirmationModal(false)}
    >
      <div
        className={styles.clearButton}
        onClick={() => setShowConfirmationModal((previous) => !previous)}
      >
        <span>Очистити дані</span>
        <FontAwesomeIcon icon={faTimesCircle} size={'lg'} />
      </div>
    </Tippy>
  );
};

export default SignOutButtonView;
