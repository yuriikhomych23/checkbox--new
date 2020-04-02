let listTask = document.forms['list__task'];
let addTask = document.forms['add__task']
let modal = document.querySelector('.modal')
let btnAdd = document.querySelector('.btnAdd');
let close = document.querySelector('.close')
let text = document.getElementById('text');
let list = document.querySelector('list');
let dd = document.getElementsByTagName('label')
let checkbox = document.querySelector('.checkbox')

btnAdd.addEventListener('click', function () {
    if(text.value != '') {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('class', 'checkbox');
        let span = document.createElement('span');

        span.innerHTML += text.value;

        label.appendChild(input);
        label.appendChild(span);

        listTask.appendChild(label);
        text.value = ''
    } else {
        addTask.addEventListener('click', function() {
            alert('It is not possible to add an empty field')
        })
    }
    for(let i = 0; i < listTask.children.length; i++) {
    listTask.children[i].addEventListener('click', function() {
        if (listTask.children.length < 1) {
            alert('The last element cannot be deleted')
        } else {
            this.remove()
        }
    })
}
})
