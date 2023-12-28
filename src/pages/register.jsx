import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormReg from "../components/Fragments/FormReg";
import { Link } from "react-router-dom";

const RegisterPage=()=>{
    return (
        <AuthLayouts title="Register">
            <FormReg></FormReg>
            <p className="mt-3 text-sm text-center">
            Sudah punya akun?{" "}
            <Link to="/Login" className="text-blue-600 font-bold">
                Login
            </Link>
            </p>
        </AuthLayouts>
    );
}

export default RegisterPage