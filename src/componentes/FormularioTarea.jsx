import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { useState

 } from "react";
const FormularioTarea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [arrayTareas, setArrayTareas]=useState([])
  const onSubmit = (data) => {
    console.log(data.tarea);
    //ahora debe guardar la Tarea en el State
setArrayTareas([...arrayTareas,data.tarea])
//limpiamos el formulario
reset()
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
      <ListaTareas arrayTareas={arrayTareas}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
