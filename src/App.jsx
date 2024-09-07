import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTarea from "./componentes/FormularioTarea"
<componentes></componentes>;
function App() {
  return (
    <>
      <main className="my-5 container">
        <h1 className="text-center">Bienvenidos</h1>
        <h2>Ingresá tus tareas</h2>
        <FormularioTarea></FormularioTarea>
      </main>
      {/*Agregar el maquetado del footer abajo*/}
    </>
  );
}

export default App;
