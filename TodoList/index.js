window.onload = () => {
  let week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let dayName = week[today.getDay()];

  document.querySelector(".date").append(`${year}년 ${month}월 ${day}일`);
  document.querySelector(".day").append(dayName);

  reloadCount();
};

const reloadCount = () => {
  let count = document.querySelectorAll(".todo-item:not(.done)").length;
  document.querySelector(".count").innerText = count;
};

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

    reloadCount();
  }
};

const delTodo = (el) => {
  el.parentElement.remove();
  reloadCount();
};

const todoDone = (el) => {
  el.parentElement.classList.toggle("done");
  reloadCount();
};
