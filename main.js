let table = document.getElementById("table");
let buttonSave;
let buttonCancel;
let text;
let newElem;

table.onclick = function (e) {
    elem = e.target;
    console.log(elem);
    if (elem.tagName == "TD") {
        if (!elem.querySelector(".text2") || !elem.querySelector(".buttonSave")) {
            CreateClassForText(elem);
            CreateButtons(elem);
        }

        buttonSave.onclick = function() {
            console.log("save");

            buttonSave.remove();
            buttonCancel.remove();
        }

        buttonCancel.onclick = function() {
            text.remove();

            buttonSave.remove();
            buttonCancel.remove();

            newElem = document.createElement("p");
            newElem.className = "text";
            newElem.innerText = "some text"
            
            elem.append(newElem);
        }
    }
}

function CreateButtons(elem) {
    buttonSave = document.createElement("button");
    buttonCancel = document.createElement("button");

    buttonSave.innerHTML = "save";
    buttonCancel.innerHTML = "cancel";

    buttonSave.className = "buttonSave";
    buttonCancel.className = "buttonCancel";

    elem.append(buttonSave);
    elem.append(buttonCancel);
}

function CreateClassForText(elem) {
    text = elem.querySelector(".text");
    text.className = "text2";
}
