function addNewTsk() {
    var list = document.getElementById("list");
    var text = document.getElementById("tsk_name").value;

    if(text.length === 0) {
        alert('É necessário usar pelo menos 1 caracter para habilitar esta função')
        return
    }

    var listItem = document.createElement("li");
    listItem.className = "list-item";

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);

}