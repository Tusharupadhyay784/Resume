console.log("Connected")
const dark_light = document.querySelector('html')
const darkMode = document.querySelector('.darkMode'); //img
const h1 = document.getElementById('h1');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const colors = document.getElementById('colors')
const btn = document.querySelector('.btn');
let b = false;
let c1;
let i = false;
let c2;
let colorval;
let c3;
// Dark Mode

let dark = localStorage.getItem("dark-mode");
const enableDark = () => {
    dark_light.classList.add('dark');
    dark_light.classList.remove('light');
    darkMode.src = './Images/sun.png';
    localStorage.setItem('dark-mode', "enabled");
}
const disableDark = () => {
    dark_light.classList.add('light');
    dark_light.classList.remove('dark');
    darkMode.src = './Images/moon.png';
    localStorage.setItem('dark-mode', "disabled");
}
darkMode.addEventListener('click', () => {
    dark = localStorage.getItem("dark-mode");
    if (dark === "disabled") {
        enableDark();
        h1.style.color = "#fff"
        btn.style.color = "#fff"

    }
    else {
        disableDark();
        h1.style.color = "#000"
        btn.style.color = ""
    }
})

// Dark Mode Completed
// Middle Section Starts

let inp = false;
btn.style.display = "none"
input1.addEventListener('click', () => {
    input2.style.display = "block"
    btn.style.display = "flex";
    inp = true;
    console.log(inp);
})

function closeinput() {
    input2.style.display = "none"
    btn.style.display = "none";
    input1.value = "";
    input2.value = "";
    input1.style.fontWeight = "normal";
    input2.style.fontWeight = "normal";
    input1.style.fontStyle = "normal";
    input2.style.fontStyle = "normal";
    input1.style.color = "#000";
    input2.style.color = "#000";
    colors.value = "#000";
    input1.style.textTransform = "none"
    input2.style.textTransform = "none"
    b = false;
    c1 = "normal";
    i = false;
    c2 = "normal";
    colorval = "#000";
    c3 = "lowercase";

}


function BoldText() {
    console.log("xmen");
    if (!b) {
        input1.style.fontWeight = "bold";
        input2.style.fontWeight = "bold";
        c1 = "bold";
        b = !b;
    }
    else {
        input1.style.fontWeight = "normal";
        input2.style.fontWeight = "normal";
        c1 = "normal"
        b = !b;
    }

}


function ItalicText() {
    // italics()
    if (!i) {
        input1.style.fontStyle = "italic";
        input2.style.fontStyle = "italic";
        c2 = "italic"
        i = true;
    }
    else {
        input1.style.fontStyle = "normal";
        input2.style.fontStyle = "normal";
        c2 = "normal"
        i = false;
    }
}

function ColorValue() {
    // colors.style.backgroundColor = input1.value;
    // colors.style.backgroundColor = input2.value;
    input1.style.color = colors.value;
    input2.style.color = colors.value;
    colorval = colors.value;
}
function showMessage(x1, x2, y1, y2) {
    let x = document.getElementById("snackbar");
    x.innerText = `Title Count ---> ${x1}\nTitle Count ---> ${x2}\n Words Count ---> ${y1}\nCharacter Count ---> ${y2}`
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function WordCount() {
    let word1 = 0;
    let charac1 = 0;
    let word2 = 0;
    let charac2 = 0;
    word1 = input1.value.split(" ").length;
    charac1 = input1.value.split("").length;
    word2 = input2.value.split(" ").length;
    charac2 = input2.value.split("").length;
    showMessage(word1, charac1, word2, charac2);
}

function UpperCase() {

    input1.style.textTransform = "uppercase"
    input2.style.textTransform = "uppercase"
    c3 = "uppercase"

}

function LowerCase() {

    input1.style.textTransform = "lowercase"
    input2.style.textTransform = "lowercase"
    c3 = "lowercase"


}



const doneBtn = document.getElementById('Done');
const lower_cards = document.querySelector('.lower_cards');
lower_cards.classList.add('draggable')
const task = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

showItems();
function makeChanges(h_one, ps, value) {
    h_one.style.fontWeight = value.bold;
    ps.style.fontWeight = value.bold;
    h_one.style.fontStyle = value.italic
    ps.style.fontStyle = value.italic

    h_one.style.color = value.color;
    ps.style.color = value.color;

    h_one.style.textTransform = value.FONT;
    ps.style.textTransform = value.FONT;
}
function showItems() {
    task.forEach((value, index) => {
        let cards = document.createElement('div');
        cards.setAttribute('id', 'dragMe')
        let img = document.createElement('img')
        let normalDiv = document.createElement('div');
        let h_one = document.createElement('h1');
        let ps = document.createElement('p');
        cards.classList.add('card_one');

        cards.appendChild(normalDiv);
        normalDiv.appendChild(h_one);
        img.src = './Images/cross.png';
        normalDiv.appendChild(img);
        img.addEventListener('click', () => {
            removeItem();
            task.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(task));
            showItems();
        })
        cards.appendChild(ps);
        h_one.textContent = value.title
        ps.textContent = value.description
        makeChanges(h_one, ps, value);
        // document.getElementsByClassName('lower_cards')[0].appendChild(cards);
        lower_cards.appendChild(cards);
        closeinput();
    })
}
function removeItem() {
    task.forEach(() => {
        const card = document.querySelector('.card_one');
        card.remove();

    })
}
doneBtn.addEventListener('click', () => {

    removeItem();
    task.push({
        title: input1.value,
        description: input2.value,
        bold: c1,
        italic: c2,
        color: colorval,
        FONT: c3,
    })
    localStorage.setItem('tasks', JSON.stringify(task));

    showItems();
})

// login and signUp part
function preventBack() { window.history.forward(); }
console.log(sessionStorage.getItem('isLogin'));
if (!sessionStorage.getItem('isLogin')) {
    setTimeout(preventBack, 0)
    window.onunload = function () { null }

}







