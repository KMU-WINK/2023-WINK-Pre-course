const addTodo = () => {
  let text = document.querySelector("#textbox").value;
  if (!text) {
    alert("빈칸입니다");
  } else {
    let todo = document.createElement("div");
    todo.classList.add("todo-item");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onclick", "todoDone(this)");

    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "delTodo(this)");
    button.setAttribute("value", "❌");

    todo.append(checkbox, text, button);

    let todoContent = document.querySelector(".todo-content");
    todoContent.append(todo);
  }
};

const delTodo = (el) => {
  el.parentElement.remove();
};

const todoDone = (el) => {
  //   el.checked;
  //   el.parentElement.classList.toggle; // <- 클래스 이름으로 선택 시 밑줄가게
  el.parentElement.classList.toggle("done");
};
