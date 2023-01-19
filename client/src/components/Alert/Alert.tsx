import {store} from '../../Redux/store'

const Alert = () => {
  const { alertType, alertText } = store.getState().users;
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
  
};

export default Alert;
