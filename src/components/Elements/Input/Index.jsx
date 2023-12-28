import Label from "./Label"
import Input from "./Input"

const InputForm = (props)=>{
    const {label, name, type, placeholder, atributte } = props;
    return (
      <div className="mb-6">
        <Label htmlFor={name}>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder} atributte={atributte}/>
      </div>
    );
};

export default InputForm