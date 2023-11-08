import Inicio from "./Screens/Inicio";
import Planes from "./Screens/Planes";
import Descargar from "./Screens/Descargar";
import Benefits from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Planes />
      <Descargar />
      <Contact />
      <Benefits />
    </div>
  );
}

export default App;
