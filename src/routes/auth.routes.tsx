import { Route, Routes } from "react-router-dom";
import AppRoutes from "./app.routes";
import SignIn from "../pages/Signin";
import { useAuth } from "../hooks/auth";

const AuthRoutes: React.FC = () => {
  const { logged } = useAuth();
  return (
    <Routes>
      <Route path="*" element={logged ? <AppRoutes /> : <SignIn />} />
    </Routes>
  );
};

export default AuthRoutes;
