// Define la clase TodoModel
export class TodoModel {
  // Declara una propiedad para el título de la tarea
  title: string;
  // Declara una propiedad para el estado de la tarea (completada o no)
  completed: boolean;
  // Declara una propiedad para la fecha de creación de la tarea
  creationDate: Date;

  // Define el constructor de la clase
  constructor(title: string, completed: boolean = false) {
    // Inicializa el título de la tarea con el valor proporcionado
    this.title = title;
    // Inicializa el estado de la tarea con el valor proporcionado, o 'false' si no se proporciona ningún valor
    this.completed = completed;
    // Inicializa la fecha de creación de la tarea con la fecha y hora actuales
    this.creationDate = new Date();
  }
}
