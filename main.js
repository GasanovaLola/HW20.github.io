let table = document.getElementById("table");
let buttonSave;
let buttonCancel;
let text;

table.onclick = function (e) {
    console.log(e.target.tagName, "e");
    if (e.target.tagName == "TD") {
        console.log("click on td");
        text = e.target.querySelector(".text");
        text.className = "text2";

        buttonSave = document.createElement("button");
        buttonCancel = document.createElement("button");

        buttonSave.innerHTML = "save";
        buttonCancel.innerHTML = "cancel";

        buttonSave.className = "buttonSave";
        buttonCancel.className = "buttonCancel";

        e.target.append(buttonSave);
        e.target.append(buttonCancel);

        buttonSave.onclick = function() {
            console.log("save");
        }

        buttonCancel.onclick = function() {
            text.remove();

            buttonSave.remove();
            buttonCancel.remove();
        }
    }
}