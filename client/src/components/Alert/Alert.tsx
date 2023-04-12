import {store} from '../../Redux/store'

const Alert = () => {
  const { alertType, alertText } = store.getState().stations;
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
  
};

export default Alert;