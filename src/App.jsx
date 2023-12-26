import Button from "./components/Elements/Button";
function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center border-black">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold  mb-2 text-blue-600">Login</h1>
          <p className="font-small text-slate-500 mb-8">
            Selamat Datang, Silakan masukkan email dan password kamu
          </p>
          <form action="">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-slate-700 font-bold mb-2 text-sm"
              >
                Email
              </label>
              <input
                type="text"
                className="text-sm border rounded w-full py-2 px-3 text-slate 700 placeholder:opacity-50"
                placeholder="Masukkan email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-slate-700 font-bold mb-2 text-sm"
              >
                Password
              </label>
              <input
                type="password"
                className="text-sm border rounded w-full py-2 px-3 text-slate 700 placeholder:opacity-50"
                placeholder="Masukkan password"
              />
            </div>
            <div>
              <Button variant="bg-green-600 w-full">Masuk</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
