let listTask = document.forms['list__task'];
let addTask = document.forms['add__task']
let modal = document.querySelector('.modal')
let btnAdd = document.getElementById('btnAdd');
let close = document.querySelector('.close')
let text = document.getElementById('text');
let list = document.getElementById('list');
let dd = document.getElementsByTagName('label')

btnAdd.addEventListener('click', function () {
    if(text.value != '') {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('class', 'checkbox');
        let span = document.createElement('span');

        span.innerHTML += text.value;

        label.appendChild(span);
        label.appendChild(input);

        listTask.appendChild(label);
        text.value = ''
    } else {
        // modal window
        listTask.classList.add('.modal');
        modal.style.display = 'block';
        close.addEventListener('click', function() {
            modal.style.display = "none";
        })
    }
 
})








  