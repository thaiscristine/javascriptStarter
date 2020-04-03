var list = document.querySelector('#app ul')
var btnAdd = document.querySelector('#app button')
var input = document.querySelector('#app input')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {

    list.innerHTML = ''
    for(todo of todos){
        var listElement = document.createElement('li')
        var listTextElement = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        var position = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTask(' + position + ')')

        var linkTextElelemnt = document.createTextNode('Excluir')
        linkElement.appendChild(linkTextElelemnt)

        listElement.appendChild(listTextElement)
        listElement.appendChild(linkElement)
        list.appendChild(listElement)
    }
}

renderTodos()

function deleteTask(position){
    todos.splice(position, 1)
    renderTodos()
    saveToStorage()
}

function addTask(){
    var textTask = input.value

    todos.push(textTask)
    input.value = ''
    renderTodos()
    saveToStorage()
}

btnAdd.onclick = addTask

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))
}