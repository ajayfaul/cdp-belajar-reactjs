import "./App.css";
// import Article from "./components/Article";
import Home from "./pages/Index";
import { GlobalContext } from "./context";

function App() {
  const user = {
    username: "ajay",
  };

  return (
    <>
      <GlobalContext.Provider value={user}>
        <Home />
      </GlobalContext.Provider>
      {/* <Article name="beruk" titles={["Tutorial react", "React Fundamental"]} />
        <br />
        <Article name="chloe" titles={["Nextjs", "laravel"]} /> */}
    </>
  );
}

export default App;
