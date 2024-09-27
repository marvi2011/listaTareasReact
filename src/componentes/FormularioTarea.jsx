import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
const FormularioTarea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const leerLocalStorage =
    JSON.parse(localStorage.getItem("listaTareaskey")) || [];
  const [arrayTareas, setArrayTareas] = useState(leerLocalStorage);

  //aqui uso el ciclo de vida
  useEffect(() => {
    console.log("desde el useEffect, usando el componente de vida");
    localStorage.setItem("listaTareaskey", JSON.stringify(arrayTareas));
  });

  const onSubmit = (data) => {
    console.log(data.tarea);
    //ahora debe guardar la Tarea en el State
    setArrayTareas([...arrayTareas, data.tarea]);
    //limpiamos el formulario
    reset();
  };
  const borrarTarea = (nombreTarea) => {
    const arrayFiltrado = arrayTareas.filter((tarea) => tarea !== nombreTarea);
    setArrayTareas(arrayFiltrado);
  };
  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)} className="mb-5">
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Tarea"
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 2,
                mesagge: "La tarea debe tener como mínimo 2 caracteres.",
              },
              maxLength: {
                value: 20,
                mesagge: "La tarea debe tener como máximo 20 caracteres.",
              },
            })}
          />

          <Button variant="success" type="submit">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>
      <ListaTareas
        arrayTareas={arrayTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
