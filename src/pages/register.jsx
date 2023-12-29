import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormReg from "../components/Fragments/FormReg";
import { Link } from "react-router-dom";

const RegisterPage=()=>{
    return (
        <AuthLayouts title="Register" type="register">
            <FormReg></FormReg>
        </AuthLayouts>
    );
}

export default RegisterPage