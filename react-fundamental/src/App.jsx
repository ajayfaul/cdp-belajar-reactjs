import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <>
      <Article name="beruk" titles={["Tutorial react", "React Fundamental"]} />
      <br />
      <Article name="chloe" titles={["Nextjs", "laravel"]} />
    </>
  );
}

export default App;
