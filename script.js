let buttonAdd = $("#buttonAdd").click(()=>{
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
})