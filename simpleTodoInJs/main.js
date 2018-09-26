// store stuff in an object

var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [],
    completed: []
};

// renderTodoList();   bad place to run this :)


// remove and complete svg

var removeSvg = '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"                    width="30px" height="40px" viewBox="0 0 774.266 774.266"                    xml:space="preserve">               <g>                   <g>                       <path d="M640.35,91.169H536.971V23.991C536.971,10.469,526.064,0,512.543,0c-1.312,0-2.187,0.438-2.614,0.875                           C509.491,0.438,508.616,0,508.179,0H265.212h-1.74h-1.75c-13.521,0-23.99,10.469-23.99,23.991v67.179H133.916                           c-29.667,0-52.783,23.116-52.783,52.783v38.387v47.981h45.803v491.6c0,29.668,22.679,52.346,52.346,52.346h415.703                           c29.667,0,52.782-22.678,52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133,114.286,670.008,91.169,640.35,91.169z                            M285.713,47.981h202.84v43.188h-202.84V47.981z M599.349,721.922c0,3.061-1.312,4.363-4.364,4.363H179.282                           c-3.052,0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715,182.339H129.551v-38.387c0-3.053,1.312-4.802,4.364-4.802                           H640.35c3.053,0,4.365,1.749,4.365,4.802V182.339z"/>                       <rect x="475.031" y="286.593" width="48.418" height="396.942"/>                       <rect x="363.361" y="286.593" width="48.418" height="396.942"/>                       <rect x="251.69" y="286.593" width="48.418" height="396.942"/>                   </g></svg>';
var completeSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.953 26.953"  xml:space="preserve"><g><path style="fill:#030104;" d="M0.213,5.981h1.678c0.121,0,0.217-0.098,0.217-0.222c0.004-1.345,1.068-2.442,2.377-2.444c0.121,0,0.217-0.098,0.217-0.222V1.369C4.701,1.246,4.605,1.146,4.484,1.146C2.012,1.146,0,3.217,0,5.759C0,5.883,0.094,5.981,0.213,5.981z"/><path style="fill:#030104;" d="M0.213,10.833h1.678c0.121,0,0.217-0.098,0.217-0.221v-3.53c0-0.121-0.096-0.222-0.217-0.222H0.213C0.094,6.86,0,6.96,0,7.082v3.53C0,10.735,0.094,10.833,0.213,10.833z"/><path style="fill:#030104;" d="M0.213,15.438h1.678c0.121,0,0.217-0.097,0.217-0.221v-3.529c0-0.121-0.096-0.223-0.217-0.223H0.213C0.094,11.465,0,11.567,0,11.688v3.529C0,15.341,0.094,15.438,0.213,15.438z"/><path style="fill:#030104;" d="M0.213,20.14h1.678c0.121,0,0.217-0.096,0.217-0.221v-3.526c0-0.119-0.096-0.221-0.217-0.221H0.213C0.094,16.172,0,16.274,0,16.393v3.526C0,20.044,0.094,20.14,0.213,20.14z"/><path style="fill:#030104;" d="M23.818,10.833c0.119,0,0.213-0.098,0.213-0.221v-0.48l-0.758,0.7h0.545V10.833z"/><path style="fill:#030104;" d="M23.818,11.465h-0.91l-0.984,1.025v2.727c0,0.124,0.098,0.221,0.215,0.221h1.68c0.119,0,0.213-0.097,0.213-0.221v-3.529C24.031,11.567,23.938,11.465,23.818,11.465z"/><path style="fill:#030104;" d="M23.816,16.172h-1.674c-0.121,0-0.217,0.102-0.217,0.221v3.526c0,0.125,0.096,0.221,0.217,0.221h1.674c0.119,0,0.215-0.096,0.215-0.221v-3.526C24.031,16.274,23.936,16.172,23.816,16.172z"/><path style="fill:#030104;" d="M18.211,23.638h-3.432c-0.117,0-0.217,0.1-0.217,0.221v1.725c0,0.125,0.1,0.223,0.217,0.223h3.432c0.121,0,0.217-0.098,0.217-0.223v-1.725C18.428,23.738,18.332,23.638,18.211,23.638z"/><path style="fill:#030104;" d="M13.729,23.638h-3.432c-0.117,0-0.215,0.1-0.215,0.221v1.725c0,0.125,0.098,0.223,0.215,0.223h3.432c0.121,0,0.217-0.098,0.217-0.223v-1.725C13.945,23.738,13.85,23.638,13.729,23.638z"/><path style="fill:#030104;" d="M9.154,23.638H5.723c-0.117,0-0.215,0.1-0.215,0.221v1.725c0,0.125,0.098,0.223,0.215,0.223h3.432c0.123,0,0.217-0.098,0.217-0.223v-1.725C9.371,23.738,9.277,23.638,9.154,23.638z"/><path style="fill:#030104;" d="M14.779,3.315h3.432c0.121,0,0.217-0.098,0.217-0.222V1.369c0-0.123-0.096-0.223-0.217-0.223h-3.432c-0.117,0-0.217,0.1-0.217,0.223v1.725C14.562,3.217,14.662,3.315,14.779,3.315z"/><path style="fill:#030104;" d="M10.297,3.315h3.432c0.121,0,0.217-0.098,0.217-0.222V1.369c-0.001-0.123-0.096-0.223-0.217-0.223h-3.432c-0.117,0-0.215,0.1-0.215,0.223v1.725C10.082,3.217,10.18,3.315,10.297,3.315z"/><path style="fill:#030104;" d="M5.723,3.315h3.432c0.123,0,0.217-0.098,0.217-0.222V1.369C9.371,1.246,9.277,1.146,9.154,1.146H5.723c-0.118,0-0.215,0.1-0.215,0.223v1.725C5.508,3.217,5.605,3.315,5.723,3.315z"/><path style="fill:#030104;" d="M4.484,23.584c-1.309-0.006-2.373-1.098-2.377-2.443c0-0.121-0.096-0.219-0.217-0.219H0.213C0.094,20.921,0,21.019,0,21.14c0,2.545,2.012,4.611,4.484,4.611c0.121,0,0.217-0.098,0.217-0.223v-1.722C4.701,23.685,4.605,23.584,4.484,23.584z"/><path style="fill:#030104;" d="M23.768,20.921h-1.674c-0.121,0-0.217,0.098-0.217,0.219c-0.004,1.346-1.07,2.438-2.379,2.443c-0.117,0-0.215,0.102-0.215,0.223v1.723c0,0.125,0.098,0.223,0.215,0.223c2.475,0,4.484-2.066,4.484-4.611C23.982,21.019,23.889,20.921,23.768,20.921z"/><path style="fill:#030104;" d="M19.498,3.315c1.299,0.002,1.484,0.188,2.154,1.43l1.596-1.5c-0.562-1.621-1.893-2.099-3.75-2.099c-0.117,0-0.215,0.1-0.215,0.223v1.725C19.283,3.217,19.381,3.315,19.498,3.315z"/><path style="fill:#030104;" d="M26.701,5.528l-1.832-1.832c-0.336-0.336-0.883-0.336-1.219,0L12.67,14.677l-5.223-5.26c-0.34-0.337-0.885-0.337-1.223,0l-1.829,1.829c-0.338,0.337-0.338,0.885,0,1.221l5.809,5.852l0.02,0.027l1.264,1.266l0.295,0.295l0,0l0.271,0.27c0.336,0.336,0.883,0.336,1.221,0L26.701,6.749C27.037,6.413,27.037,5.863,26.701,5.528z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

renderTodoList();

// user clicked on the ad button
// if there is any text inside the item field, add that text to the todo list

document.getElementById('add').addEventListener('click',function() {
    var value = document.getElementById('item').value;
    if (value){
        addItem(value);
    }
});


document.getElementById('item').addEventListener('keydown',function(e) {
    var value = this.value;

    if (e.code === 'Enter' && value ){
        addItem(value);
    }
});

function addItem(value) {
    addItemToDom(value);
    document.getElementById('item').value = '';

    data.todo.push(value);
    dataObjectUpdated();
}

function renderTodoList() {
    if (!data.todo.length && !data.completed.length) return;

    for (var i = 0; i < data.todo.length; i++) {
        var value = data.todo[i];
        addItemToDom(value);
    }

    for (var j = 0; j < data.completed.length; j++) {
        var value = data.completed[j];
        addItemToDom(value, true);
    }
}

function dataObjectUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
}

// remove items from lists
function removeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    if (id === 'todo'){
        data.todo.splice(data.todo.indexOf(value), 1);
    }else{
        data.completed.splice(data.completed.indexOf(value), 1);
    }

    dataObjectUpdated();

    parent.removeChild(item);
}

// push item from to do to completed

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText

    if (id === 'todo'){
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);
    }else{
        data.completed.splice(data.completed.indexOf(value), 1);
        data.todo.push(value);
    }

    dataObjectUpdated();
// check if the item should be added to completed or re-added to todo list
    var target = (id === 'todo') ? document.getElementById('completed'): target = document.getElementById('todo');

    // if (id=== 'todo'){
    //     // its a todo item to be completed
    //     target = document.getElementById('completed');
    // }else{
    //     // its a completed item to be redone
    //     target = document.getElementById('todo');
    // }
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

function addItemToDom(text, completed) {
    var list = (completed) ? document.getElementById('completed'): document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSvg;

    // add click event for removing the item
    remove.addEventListener('click', removeItem);


    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSvg;

    // add click event for completting the item
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}