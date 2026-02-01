const addBtn = document.querySelector("#add-btn");
const removedBtn = document.querySelector("#remove-btn");
const closeBtn = document.querySelector("#close-btn");
const modalCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const taskDetail = document.querySelector(".textarea-cont");
const taskCont = document.querySelector(".task-container");
const submitBtn = document.querySelector("#submit-btn");
const priorityTaskColors = document.querySelectorAll(".priority-color");
const toolboxColors = document.querySelectorAll(".color");


let ogTickets = [];
let DEFAULT_COLOR = "pink";
let activePriorityColor = DEFAULT_COLOR;
let activeToolBoxColor = "all";
const colors = ["pink", "lightblue", "purple", "green"];
let deleteMode = false;

const ticketFromLS = localStorage.getItem("ogTickets");
if(ticketFromLS) {
    ogTickets = JSON.parse(ticketFromLS);
    refreshMainContainer();
}
function getFilterTickets() {
    if(activeToolBoxColor === "all") {
        return ogTickets;
    } 
    return ogTickets.filter(({color}) => color === activeToolBoxColor);
}

function refreshMainContainer() {
    // console.log("TICKETS REFRESHED!")
    mainCont.innerHTML = "";
    const filteredTickets = getFilterTickets();
     filteredTickets.forEach(({ id, color, task }) => {
        createTicket({
            ticketColor: color,
            ticketId: id,
            ticketTask: task
        });
    });
}
function createTicket({ticketTask, ticketColor, ticketId}) {
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
            <div class="ticket-id">#${ticketId}</div>
            <div class="ticket-area">${ticketTask}</div>
            <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`

    mainCont.append(ticketCont);

    handleLock(ticketId, ticketCont);

    handleColor(ticketId, ticketCont);

    handleDelete(ticketId, ticketCont);
}

function handleDelete(ticketId, ticketElem) {
    ticketElem.addEventListener("click", () => {
        if(deleteMode) {
            ticketElem.remove();
            ogTickets = ogTickets.filter((ticket) => {
                return ticket.id != ticketId;
                
            })
            updateLocalStorage();
        } else {
            console.log("Ignore");
        }
    })
}

function handleColor(ticketId, ticketElem) {
    const ticketColorElem = ticketElem.querySelector(".ticket-color");
    // console.log(ticketColorElem);
    ticketColorElem.addEventListener("click", function() {
        const currentColor = ticketColorElem.classList[1];
        let currentColorIdx = colors.findIndex((color)=> color === currentColor);
        const newColorIdx=++currentColorIdx % colors.length;
        const newColor = colors[newColorIdx];
        // console.log(newColor)
        ticketColorElem.classList.remove(currentColor);
        ticketColorElem.classList.add(newColor);

        let index= ogTickets.findIndex((ticket) => {
            return ticket.id = ticketId;
        })

        // console.log(index);
        ogTickets[index].color = newColor;
        updateLocalStorage();
    })
}

function handleLock(ticketId, ticketElem) {
    const lockClass= "fa-lock";
    const unlockClass = "fa-unlock";

    const ticketLockElem = ticketElem.querySelector(".ticket-lock i");
    const ticketTaskArea = ticketElem.querySelector(".ticket-area");

    ticketLockElem.addEventListener("click", () => {
        if(ticketLockElem.classList.contains(lockClass)) {
            ticketLockElem.classList.remove(lockClass);
            ticketLockElem.classList.add(unlockClass);
            ticketTaskArea.setAttribute("contenteditable", "true")
        } else {
            ticketLockElem.classList.add(lockClass);
            ticketLockElem.classList.remove(unlockClass);
            ticketTaskArea.setAttribute("contenteditable", "false")
            
            let index = ogTickets.findIndex((ticket) => ticket.id === ticketId);
            ogTickets[index].task = ticketTaskArea.textContent;
            updateLocalStorage();
        }
    })
}

function toggleDeleteMode() {
    deleteMode = !deleteMode;
    if(deleteMode === true) {
        alert("Delete Mode Activated");
        removedBtn.style.color = "red";

    } else {
        alert("delete mode deactivated");
        removedBtn.style.color = "white";
    }
}
function handleSubmit() {
    if(taskDetail.value && activePriorityColor) {
        ogTickets.push({
            task: taskDetail.value,
            color: activePriorityColor,
            id: shortid() //important during the deletion process, as we create a unique id.
        })
        
        // console.log(ogTickets);

        closeModal();
        clearSelectedPriorityColor();
        taskDetail.value = "";
        activePriorityColor = DEFAULT_COLOR;
        updateLocalStorage();
        refreshMainContainer();
    }
}

function updateLocalStorage() {
    localStorage.setItem("ogTickets", JSON.stringify(ogTickets));
}


function clearSelectedPriorityColor() {
    priorityTaskColors.forEach((elem) => {
        if(elem.classList.contains("active")) {
            elem.classList.remove("active");
        }
    });
}

function OnPriorityClickInModal(event) {
    clearSelectedPriorityColor();
    const elem =event.target;
    activePriorityColor = elem.classList[1];
    elem.classList.add("active");
}

function clearSelectedToolboxColor() {
    toolboxColors.forEach((elem) => {
        if(elem.classList.contains("active")) {
            elem.classList.remove("active");
        }
    });
}

function onClickToolboxColors(event){ 
    clearSelectedToolboxColor();
    const elem =  event.target;
    activeToolBoxColor = elem.classList[1];
    elem.classList.add("active");

    console.log(activeToolBoxColor);
    refreshMainContainer();
}

function openModel() {
    modalCont.style.display = "flex";
}

function closeModal() {
    modalCont.style.display = "none";
}

addBtn.addEventListener("click", openModel);
removedBtn.addEventListener("click", toggleDeleteMode)
closeBtn.addEventListener("click", closeModal);
priorityTaskColors.forEach(function(elem) {
    elem.addEventListener("click", OnPriorityClickInModal)
}) 

submitBtn.addEventListener("click",handleSubmit);
toolboxColors.forEach(function(elem) {
    elem.addEventListener("click", onClickToolboxColors)
})

console.log(activeToolBoxColor);