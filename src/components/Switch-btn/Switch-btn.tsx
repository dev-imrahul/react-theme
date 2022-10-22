import { FC, useContext } from 'react';
import { RootContext } from '../../hooks/useRoot';

interface SwitchBtnProps {}

const SwitchBtn: FC<SwitchBtnProps> = () => {
  const {toogle, themeType} = useContext(RootContext);
  return (
    <>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={toogle} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{themeType}</label>
      </div>
    </>
  )
};

export default SwitchBtn;
