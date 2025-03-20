import "./App.css";
// import Article from "./components/Article";
import Home from "./pages/Index";

function App() {
  const value = true;

  return (
    <>
      {/* conditional rendering */}
      {value ? <h1>True</h1> : <h1>False</h1>}
      <Home />
      {/* <Article name="beruk" titles={["Tutorial react", "React Fundamental"]} />
      <br />
      <Article name="chloe" titles={["Nextjs", "laravel"]} /> */}
    </>
  );
}

export default App;
