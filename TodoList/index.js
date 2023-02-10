const addTodo = () => {
  let textbox = document.querySelector("#textbox");

  let todo = document.createElement("div");
  todo.classList.add("todo-item");

  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  todo.append(input, textbox.value);

  let todoContent = document.querySelector(".todo-content");
  todoContent.append(todo);
};
