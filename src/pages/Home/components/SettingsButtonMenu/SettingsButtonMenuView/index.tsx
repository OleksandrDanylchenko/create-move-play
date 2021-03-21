import React, { FunctionComponent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './tooltipStyles.scss';
import SignOutButtonContainer from '../components/SignOutButton/SignOutButtonContainer';

const SettingsButtonMenuView: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const settingsMenu = (
    <div>
      <SignOutButtonContainer />
    </div>
  );

  return (
    <Tippy
      content={settingsMenu}
      visible={showMenu}
      interactive
      placement={'bottom-end'}
      onClickOutside={() => setShowMenu(false)}
    >
      <div>
        <FontAwesomeIcon
          icon={faCog}
          size={'lg'}
          onClick={() => setShowMenu((previous) => !previous)}
        />
      </div>
    </Tippy>
  );
};

export default SettingsButtonMenuView;
