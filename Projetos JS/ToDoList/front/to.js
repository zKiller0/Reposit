// Seleção de Elementos

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList= document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

let oldInputValue

// Funções
const saveTodo = (text) => {

// Div Geral
    const todo = document.createElement("div")
    todo.classList.add("todo")

// Título da Div criada 
    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

// Botões
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

// Lista Geral
    todoList.appendChild(todo)

// Limpando a Lista
    todoInput.value = ""

// Focando no Input das Tarefas
    todoInput.focus()

}

// Função para trocar / apagar os valores
const toggleForms = ()  => {

    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")

}

// Função para atualizar as tarefas 
const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo")

    // Buscando os todo
    todos.forEach( (todo) => {
        
        // Substituindo o todoTitle
        let todoTitle = todo.querySelector("h3")

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
     })

}

// Eventos

// Evento de Envio
todoForm.addEventListener("submit" , (e) => { 
    
    // Não enviar o Form
    e.preventDefault()

    // Valor do Input   // Tarefa nova
    const inputValue = todoInput.value 

    // Validação para não criar tarefas sem titulo
    if(inputValue) {
        saveTodo(inputValue)
        
    }
})

// Evento de click 
document.addEventListener("click" , (e) => {

    //  Elemento que foi clicado
    const targetEl = e.target

    // Div mais proxima ( to do )
    const parentEl = targetEl.closest('div')

    // Pegando o Titulo
    let todoTitle;

    // Checando se existe o Parent
    if ( parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText
    }

    // Verificando a classe que foi clicada
    if (targetEl.classList.contains("finish-todo")) {

        // Adicionando a classe done onde clica
        parentEl.classList.toggle("done") 
    }

    // Identificando o botão de remoção
    if (targetEl.classList.contains("remove-todo")) {

        // Função para remover
        parentEl.remove()
    }

    if ( targetEl.classList.contains("edit-todo")) {

        // Esconde um form e mostra outro
        toggleForms()

        // Mudando e Salvando o valor todoTitle
        editInput.value = todoTitle 
        oldInputValue =  todoTitle
    }
})

cancelEditBtn.addEventListener("click" , (e) => {
    // Não enviar Form
    e.preventDefault()

    toggleForms()
})

// Evento de Edição 
editForm.addEventListener("submit" , (e) => { 

    e.preventDefault()

    const editInputValue = editInput.value

    if ( editInputValue ) {
        updateTodo(editInputValue)
    }

    toggleForms()

})