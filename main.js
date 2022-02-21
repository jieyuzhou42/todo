function addNewList() {
    alert('hello world alert!');
    console.log('hello world console');
}

function addListItem() {
    let list=document.getElementById("grocery-list");
    let itemInput=document.getElementById("text-input");
    let newItem=document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}

