type Todo = {
  title: string,
  description: string,
  completed: boolean
};

const todo: Readonly<Todo> = {
  title: 'Terminar o mini curso de Typescript',
  description: 'Terminar de assistir as aulas do curso de Typescript no Youtube',
  completed: false
};

console.log(todo);
// todo.completed = true; não pode

// uma forma de editar um objeto com readonly
// usando o Partial, que deixa todos os campos do objeto opcionais,
// mas garante que as propriedades que vamos passar estejam dentro do 
// object.


// PARTIAL
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {
    ...todo,
    ...fieldsToUpdate
  }
}

const todo2: Todo = updateTodo(todo, { completed: true });
console.log(todo2);


// PICK - pega as propriedades que quisermos 
type todoPreview = Pick<Todo, 'title' | 'description'>

const todo3: todoPreview = {
  title: 'terminar o teste',
  description: 'terminar o teste front-end do Refinaria de Dados'
};

console.log(todo3);


// OMIT omite as propriedades que não queremos
type todoPreview2 = Omit<Todo, 'description'>

const todo4: todoPreview2 = {
  title: 'Almoçar',
  completed: false
}

console.log(todo4);