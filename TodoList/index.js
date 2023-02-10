const addTodo = () => {
  let textbox = document.querySelector("#textbox");

  let todo = document.createElement("div");
  todo.classList.add("todo-item");

  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("onclick", "todoDone()");
  todo.append(input, textbox.value);

  let todoContent = document.querySelector(".todo-content");
  todoContent.append(todo);
};

const todoDone = (el) => {
  //   el.parentElement.classList.toggle // <- 클래스 이름으로 선택 시 밑줄가게
};
