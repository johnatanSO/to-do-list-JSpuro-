/* let buttonAdd = $("#buttonAdd").click(()=>{
    let newItem = $("#inputItem").val()
    if(newItem == ''){
        alert('Por favor, digite algo')        
    }else{
        $("#lista1").append(`<li><input type="checkbox"/>${newItem}</li>`)
        $("#inputItem").val('') 
    }
    
})
let buttonClear = $("#buttonClear").click(()=>{
    $("#lista1").empty()
}) */
let items = []


function listItem(){
    items.map((item)=>{
    const lista = document.querySelector("#lista")
    const listItem = document.createElement('li')

    const remove = document.createElement('input')
    remove.type = "button"
    remove.value = "X"
    remove.id = "removeButton"

    listItem.innerText = item
    listItem.appendChild(remove)
    lista.appendChild(listItem)

})
}


const buttonAdd = document.querySelector("#buttonAdd")
buttonAdd.addEventListener('click', ()=>{
    const inputItem = document.querySelector("#inputItem")
    items.push(inputItem.value)

    inputItem.value = ''
    clearList()
    listItem()
    console.log(items)
})
function clearList(){
    document.querySelector("#lista").innerHTML = ''
}

function removeItem(e){
    let itemRemoving = e.target.parentNode
    console.log(itemRemoving)
}

