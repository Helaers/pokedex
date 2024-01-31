import pokemonLogo from "./assets/pokemon.svg";
import "./styles/App.css";
import "./styles/pokemon.css";

function App() {
  return (
    <>
      <img src={pokemonLogo} className="logo" alt="Pokemon logo" />
      <div>Start here</div>
    </>
  );
}

export default App;
