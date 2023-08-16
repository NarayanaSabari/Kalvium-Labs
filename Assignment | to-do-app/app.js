let input = document.getElementById("input");
let button = document.getElementById("button");
let list = document.getElementById("todolist");
let arr = [];
button.onclick = function () {
  if (input.value != "") {
    arr.push(input.value);
    console.log(arr);
    input.value = "";
    appendList();
  }
};
function appendList() {
  list.innerHTML = null;
  for (let i = 0; i < arr.length; i++) {
    list.innerHTML += `<li> ${arr[i]}  <a onclick='removeIndex(${i})'>X</a><a>|</a><a onclick='editList(${i})'>Edit</a> </li>`;
  }
}

function editList(index) {
  let text = prompt("Please enter");
  if (text.length > 0) {
    arr[index] = text;
    appendList();
  }
}

function removeIndex(index) {
  arr.pop(index);
  appendList();
}
