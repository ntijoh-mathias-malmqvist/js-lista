const list = document.querySelector('ul');
list.addEventListener('click', removeTodo)

const form = document.querySelector('form')
form.addEventListener('submit', addTodo)

const searchField = document.querySelector('#search');
searchField.addEventListener('keyup', search)


function addTodo(e) {
    e.preventDefault()
    const todoValue = document.querySelector('#add-todo-input').value
    const todoElement = document.createElement('li')
    
    const todoText = document.createElement('p')
    todoText.appendChild(document.createTextNode(todoValue))

    const removeBtn = document.createElement('button')
    removeBtn.appendChild(document.createTextNode("X"))
    
    todoElement.appendChild(todoText)
    todoElement.appendChild(removeBtn)
    list.appendChild(todoElement)
}

function removeTodo(e) {
    const elementClicked = e.target
    if (elementClicked.nodeName.toLowerCase() === 'button') {
        elementClicked.parentNode.remove()
    }
}

function search(e) {
    const searchTerm = searchField.value.toLowerCase();
    Array.from(list.children).forEach((listItem) => {
        const textElement = listItem.children[0]
        if (textElement.textContent.toLowerCase().includes(searchTerm)){
            listItem.style.display = null
        }
        else listItem.style.display = 'none';
    })
}
