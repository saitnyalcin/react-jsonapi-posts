import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          JSONPlaceholder is a free online REST API that you can use whenever
          you need some fake data.
        </p>
      </header>
      <Posts />
    </div>
  );
}

export default App;
