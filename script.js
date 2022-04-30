// Pirmiausia aprašau sprendį, kad mano dienos užduotys, įrašytos į input (description-task) ir nuspaudus mygtuką (add-task-btn) fiksuotusi žemiau
// Paskelbiu kintamajį per id
// Sukuriu kintamajį sutrumpintu pavadinimu const descriptionTaskInput per Id
//Const paskelbsime per class, nors galetume ir per Id.
// todel nepamirštame priekyje  taško


const addTaskBtn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todos-wrapper');

let tasks = [];

function Task (description) {
    this.description = description;
    this.completed = false;
}

const updateLocal = () => {
   localStorage.setItem('tasks', JSON.stringify(tasks));

}

addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(deskTaskInput.value));
    updateLocal();
}) 