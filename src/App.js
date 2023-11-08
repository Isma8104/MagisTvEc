import Inicio from "./Screens/Inicio";
import Planes from "./Screens/Planes";
import Descargar from "./Screens/Descargar";
import Cobertura from "./Screens/Cobertura";
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
      <Cobertura />
    </div>
  );
}

export default App;
