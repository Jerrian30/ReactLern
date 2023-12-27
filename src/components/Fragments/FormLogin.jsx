import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormLogin = ()=>{
    return (
      <form action="">
        <InputForm
          label="Email"
          type="email"
          placeholder="Masukkan Email"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="Masukkan Password"
          name="password"
        ></InputForm>
        <Button classname="bg-blue-600 w-full "></Button>
      </form>
    );
}

export default FormLogin