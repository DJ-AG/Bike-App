import { Navigate } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypeSelector";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useTypedSelector((state) => state.users);

  
  if (!user) return <Navigate to="/" />;

  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
