
const inputBtn = document.getElementById('input_box')
const listContainer = document.getElementById('list_container')
const button = document.querySelector('.taskBtn');

button.addEventListener('click', () => {
    if (inputBtn.value === '') {
        alert('You Must Write Something')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBtn.value;
        listContainer.appendChild(li);
        // cross icon
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBtn.value = '';
    saveData();
})


listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData();
    }
}, false)



// ==== localStorage save data =====
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()

















