const Label = (props)=>{
    const {htmlFor, children}= props;
    return (
      <label
        htmlFor={htmlFor}
        className="block text-slate-700 font-bold mb-2 text-sm"
      >
        {children}
      </label>
    );
};

export default Label