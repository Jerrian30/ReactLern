import Button from "./components/Elements/Button";
function App() {
  return (
    <>
      <div className="flex justify-center bg-red-500 min-h-screen items-center border-black">
        <div>
          <Button variant="bg-slate-700">Login</Button>
          <Button variant="bg-red-700">Jerri</Button>
          <Button></Button>
        </div>
      </div>
    </>
  );
}

export default App;
