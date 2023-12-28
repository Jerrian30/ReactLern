import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormReg = ()=>{
    return (
      <form action="">
        <InputForm
          label="Fullname"
          type="text"
          placeholder="Insert Fullname"
          name="fullname"
          
        />

        <InputForm
          label="Username"
          type="text"
          placeholder="Insert Username"
          name="username"
        />

        <InputForm
          label="Email"
          type="email"
          placeholder="Insert Email"
          name="email"
        />

        <InputForm
          label="Password"
          type="password"
          placeholder="Insert Password"
          name="password"
        />

        <InputForm
          label="Confirm Password"
          type="password"
          placeholder="Insert Confirm Password"
          name="password"
        />
        <Button classname="bg-blue-700 w-full ">Register</Button>
      </form>
    );
}

export default FormReg