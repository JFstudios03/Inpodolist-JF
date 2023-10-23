const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const list = document.getElementById("list");

const popup = document.getElementById("popup");
const blur = document.getElementById("blur");

const inpodo = document.querySelector(".inpodo");
const container = document.querySelector('.container');


function openPopup(e){
    popup.classList.add("open-popup");
    blur.classList.add('active');
    inpodo.classList.add('active')
    container.classList.add('active')
}
function closePopup(e){
    popup.classList.remove("open-popup");
    blur.classList.remove('active');
    inpodo.classList.remove('active')
    container.classList.remove('active')
}

function addDetails(){
    if (fName.value === '' || lName.value === '') {
        // alert("You must input your name!");
        openPopup();
    } else{
        let li = document.createElement("li");
        li.innerHTML = fName.value + " " + lName.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }

    fName.value = "";
    lName.value = "";
    saveData();
}

list.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showList() {
    list.innerHTML = localStorage.getItem("data");
}
showList();