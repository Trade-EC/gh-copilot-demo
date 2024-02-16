export interface Answers {
  operation:
    | "Agregar un nuevo todo"
    | "Eliminar un todo"
    | "Actualizar un todo"
    | "Ver todos los TODOS"
    | "Salir";
  title?: string;
  index?: number;
  newTitle?: string;
}
