let write = document.getElementById("write");
let todolist = document.getElementById("todo-list")

write.addEventListener("keyup",function(e){
    if(e.key == "Enter"){
       addTodo(this.value)
       this.value = ''
    }
})
function addTodo(val){
    let list = document.createElement("li")
    list.innerHTML = `${val}`
    todolist.appendChild(list)
    console(e.log(val))
    list.addEventListener("click",function(){
        this.classListtoggle('done')
    })
}
