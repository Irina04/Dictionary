function addText() {
    let text = document.getElementById('addword').value;
    let listNode = document.getElementById('dictionar');
    let liNode= document.createElement("li");
    let textNode = document.createTextNode(text);
    liNode.appendChild(textNode);
    listNode.appendChild(liNode); 
    clearInput('addword');
}
function searchForWord() {
    let textForsearch = document.getElementById('searchforword').value;
    let elements = document.getElementsByTagName('li');
    let found = 0;
    for (let elem of elements) {
        let text = elem.innerHTML;
        if (text == textForsearch){
            alert('The word was found!');
            found = 1;
        }
    }
    if (found == 0) {
        alert('The word was not found!');
    }
    clearInput('searchforword');
}
function clearInput(x) {
    let clear = document.getElementById(x);
    if (clear.value != "") {
        clear.value = "";
    }
}