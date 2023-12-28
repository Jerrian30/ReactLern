import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
      <AuthLayouts title="Login">
        <FormLogin></FormLogin>
        <p className="mt-3 text-sm text-center">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-600 font-bold">
            Register
          </Link>
        </p>
      </AuthLayouts>
    );
}

export default LoginPage;