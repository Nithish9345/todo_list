inp = document.querySelector(".one")
ulst = document.getElementById("todoList");

function add() {
    if (inp.value.trim() !== "") {
        lst = document.createElement("li");
        lst.innerHTML = inp.value + "<button onclick='deleteitem(event)'>Delete</button>"
        ulst.appendChild(lst);
        inp.value = "";
    }
}

function deleteitem(event) {
    event.target.parentElement.remove();
}

function clearr() {
    inp.value = "";
}

function clearAll() {
    ulst.innerHTML = "";
}

function toggleComplete(event) {
    const listItem = event.target.parentElement;
    listItem.classList.toggle("completed");
}