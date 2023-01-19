import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../Redux/index";

export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
