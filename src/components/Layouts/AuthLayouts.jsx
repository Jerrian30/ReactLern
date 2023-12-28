const AuthLayout=(props) =>{
    const{children, title}=props;
    return (
      <div className="flex justify-center min-h-screen items-center border-black mb-10" >
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold  mb-2 text-blue-600 text-center">{title}</h1>
          <p className="font-small text-slate-500 mb-8 text-center">Selamat datang di Reactku</p>
          {children}
        </div>
      </div>
    );
}

export default AuthLayout;