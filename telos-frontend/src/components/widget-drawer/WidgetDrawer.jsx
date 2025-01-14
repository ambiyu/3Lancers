import './WidgetDrawer.css';
import { useState } from 'react';

const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
    <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
  </svg>
);

const WidgetDrawer = ({ children }) => {
  const BLANK = '';
  const [isHidden, setisHidden] = useState(false);

  function handleOnClick() {
    setisHidden(() => !isHidden);
  }

  return (
    <div className="WidgetDrawerParent">
      <div className={`closer ${isHidden ? 'flipped' : BLANK}`} onClick={handleOnClick}>
        <Arrow />
      </div>
      <div className={`WidgetDrawer ${isHidden ? 'technically-hidden' : BLANK}`}>{children}</div>
    </div>
  );
};

export default WidgetDrawer;
