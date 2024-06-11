
//variables
//camper's name
const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
//app camp list button
const btn = document.getElementById("camp-list-btn")

//app list container
const listContainer = document.querySelector(".camp-list-container")
//input
const items = document.getElementById("checkItem")


//eventlistener


btn.addEventListener("click", function(){
    let task = document.createElement('div')
    task.classList.add("task")

    let li = document.createElement('li')
    li.innerText = `${items.value}`
    
    task.appendChild(li) 
    listContainer.appendChild(task)


    items.value = ""
    //clear input
    
})


let form = document.getElementById("myForm")
let sub = document.querySelector("#myForm .fullname")

sub.addEventListener("click", function(){
let fname = document.getElementById("fname", function(){})
let insert = document.createElement(div)
let fnameV = fname.value
fnameList = insert.append(fnameV)


})
//-------------------------------------------------------------------------------------------------------------------


    //create two elements
     let trashbtn = document.createElement("button")
         trashbtn.classList.add("trash")
        trashbtn.innerHTML = "trash"
        task.appendChild("trashbtn")
   
 



    // let check = document.createElement("button")
    // check.innerHTML = check
    // check.classList.add("check")

    if()
