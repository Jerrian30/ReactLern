const Button = (props) => {
  const { children = "default", variant = "bg-slate-700" } = props;
  return (
    <button
      className={`h-10 mx-2 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;