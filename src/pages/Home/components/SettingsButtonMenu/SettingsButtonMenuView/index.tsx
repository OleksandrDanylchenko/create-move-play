import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const SettingsButtonMenuView: FunctionComponent = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCog} size={'2x'} />
    </div>
  );
};

export default SettingsButtonMenuView;
