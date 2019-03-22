// $(document).ready(init)

// function init(){
//     $("#submit").on("click", add)
//     $("#clear").on("click", clear)

// }


//Vanilla javascript

(function vanillaJs() {
    document.getElementById("submit").addEventListener("click", add)
    document.getElementById("clear").addEventListener("click", clear)
    document.getElementById("menu").addEventListener('click', toggle)
})()

function toggle(){
    let menu = document.getElementById("menu")
    menu.classList.toggle("change")

    let showMenu = document.getElementById("textOverlay")
    // debugger;
    // let getStyle = getComputedStyle(showMenu);
    if (showMenu.classList.contains("slide")){
        showMenu.classList.remove("slide")
    }
    else {
        showMenu.classList.add("slide")
    }
    // if (getStyle.getPropertyValue("class")=== "slide") {
    //     showMenu.removeAttribute("class", "slide")
    // }
    // else {
    //     showMenu.style.display = "none"
    // }
}

function add() {
    event.preventDefault();
    let input = document.getElementById("info").value


    let emptySring = /^\s*$/

    if (emptySring.test(input)) {
        console.log("you are bad")
        return
    }
//     if (input === lastInput) {
//         console.log('did it stop?')
//         return
//     }



    let addElem = document.createElement("li")
    addElem.innerText = input
    let close = document.createElement("div")
    close.innerText = "X"
    close.className = "delete"
    close.addEventListener("click", function () {
        document.getElementById("listItem").removeChild(addElem)
    })
    addElem.appendChild(close);
    document.getElementById("listItem").appendChild(addElem)
    clear();

}


// function add() {
//     event.preventDefault();
//     let input = $("#info").val();
//     let lastInput = $("li:last-child").text()


//     if (input === "" || input === " ") {
//         console.log("you are bad")
//         return
//     }
//     if (input === lastInput) {
//         console.log('did it stop?')
//         return
//     }


//     let addElem = $("<li>").text(input)
//     let close = $("<div>").text("X").addClass("delete").on("click", function () {
//         $(addElem).remove()
//     })
//     addElem.append(close)
//     $("#listItem").append(addElem)
//     clear();
// }

function clear(){
    event.preventDefault();
    let clearInput = document.getElementById("info")
    clearInput.value = ""
    console.log(clearInput)
}

// function clear() {
//     event.preventDefault();
//     $("#info").val("").attr("placeholder", "To-Do Item...")

//     clearInput.setAttribute("placeholder", "To-Do Item...")
 
// }


