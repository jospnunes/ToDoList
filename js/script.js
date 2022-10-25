const inputTarefa = document.getElementById ("itemLista");
const botaoAdd = document.getElementById("botaoAdd");
const listaTarefas = document.getElementById("listaTarefas");

carregarTarefas(); 

botaoAdd.onclick = ()=>{ 
    let textoTarefa = inputTarefa.value; 
    
    if(textoTarefa !== "" ){
        let dadosLocalStorage = localStorage.getItem("Tarefas"); 
            if(dadosLocalStorage == null){ 
                arrayTarefas = [];
            }else{
                arrayTarefas = JSON.parse(dadosLocalStorage);  
            }
        arrayTarefas.push(textoTarefa); 
        localStorage.setItem("Tarefas", JSON.stringify(arrayTarefas)); 
        carregarTarefas(); 
    }else{
        window.alert("Escreva uma tarefa!")
    }
}

function carregarTarefas(){
    let dadosLocalStorage = localStorage.getItem("Tarefas");
    if(dadosLocalStorage == null){
        arrayTarefas = [];
    }else{
        arrayTarefas = JSON.parse(dadosLocalStorage); 
    }
  
    let novaLi = "";
    arrayTarefas.forEach((element, index) => {
        novaLi += `<li>${element}<button onclick="deletarTarefa(${index})"><i id="delete" class=" fa fa-solid fa-trash" ></i></button></li>`;
    });
    listaTarefas.innerHTML = novaLi; 
    inputTarefa.value = ""; 
}


function deletarTarefa(index){
    let dadosLocalStorage = localStorage.getItem("Tarefas");
    arrayTarefas = JSON.parse(dadosLocalStorage);
    arrayTarefas.splice(index, 1); 
    localStorage.setItem("Tarefas", JSON.stringify(arrayTarefas));
    carregarTarefas(); 
}

