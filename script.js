let inp=document.getElementById("inp")
let addbtn=document.getElementById("addbtn")
let delbtn=document.getElementById("delbtn")
let savebtn=document.getElementById("savebtn")
let taskdel=document.querySelector("#task")

let todos = []

// window.onload = ()=>{
//     todos = JSON.parse(localStorage.getItem('todos')) || []
//     renderDOM()
// }

const renderDOM = ()=>{
    task.innerHTML = ''
    for (let i = 0; i < todos.length; i++){
        task.innerHTML += `<div id="${i}" class="todoContainer">
        <span id="idx">${i+1+" "}<span id="todo">${todos[i]}</span></span> 
        <div>
        <span onclick="edittodo(${i})">
            <i class="fas fa-edit" id="i1"></i>
        </span>
        <span onclick="delTodo(${i})">
            <i class="fas fa-trash-alt" id="i2"></i>
        </span>
        </div>
        </div>`
    }
    // localStorage.setItem('todos',JSON.stringify(todos))
}

const addTodo = ()=>{
    let todo = inp.value
    todos.push(todo) 
    renderDOM()
}

const delTodo=(id)=>{
    todos = todos.filter((todo,idx)=>id !== idx)
    renderDOM()
}

delbtn.onclick = ()=>{
    todos = []
    renderDOM()
}

savebtn.onclick = ()=>{
    let save=saveidx.value
    todos[save]=inp.value
    addbtn.style.display="flex"
    savebtn.style.display="none"
    addbtn.style.padding="6px"
    
    renderDOM()
}

const edittodo=(id)=>{
    let saveidx=document.getElementById("saveidx")
    saveidx.value=id;
    inp.value=todos[id]
    addbtn.style.display="none"
    savebtn.style.display="flex"
    savebtn.style.padding="6px"
} 

addbtn.addEventListener('click', function(){
    if(!inp.value){
        alert("Please fill out Add your Task")
    }else{
        addTodo()
        inp.value=''
    }
})


