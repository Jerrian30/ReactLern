const Button = (props) => {
  const { children = "Tombol", classname = "bg-slate-700" } = props;
  return (
    <button
      className={`h-10 mx-2 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;