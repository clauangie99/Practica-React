import { Button } from "./components/Button";

function App() {
  return (
    <div className="flex gap-4 p-6">
      <Button>Botón Primario</Button>
      <Button variant="outline">Botón Outline</Button>
      <Button variant="destructive">Botón Destructivo</Button>
    </div>
  );
}

export default App;

