import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormReg from "../components/Fragments/FormReg";

const RegisterPage=()=>{
    return(
        <AuthLayouts title="Register">
            <FormReg></FormReg>
        </AuthLayouts>
    )
}

export default RegisterPage