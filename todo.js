// 1.

function init() {
    //your code here
    const addButton = document.getElementById('addButton')


    addButton.addEventListener('click',addTask)
        
    }
    function addTask() {
    //your code here
    const addText = document.getElementById('todoInput').value

    const liElement = document.createElement('li')

    liElement.textContent = addText
    
    document.getElementById('todoList').appendChild(liElement)

    document.getElementById('todoInput').value = '';     
    }
    init();

// 2.

function init() {
    //your code here
    const addButton = document.getElementsByClassName('addButton')

// classname ใช้ add.eventListenerclick ปกติไม่ได้ ต้องใช้ loop
    for (let i = 0; i < addButton.length; i++) {
        addButton[i].addEventListener('click', addTask);
      }
        
    }
    function addTask() {
    //your code here

    // getClassname ต้องมีตำแหน่ง Array  ex. [0] [1]
    const addText = document.getElementsByClassName('todoInput')[0].value

    const liElement = document.createElement('li')

  

    liElement.textContent = addText
    
    document.getElementById('todoList').appendChild(liElement)

    document.getElementsByClassName('todoInput')[0].value = '';     
    }
    init();


// 3.

function init() {
  // Get the addButton element
  const addButton = document.querySelector('button');

  // Add event listener to the addButton
  addButton.addEventListener('click', addTask);
}

// Call init() function to initialize the event listener
init();

// 2. Add task function
function addTask() {
  // 2.1 Get the value from the input field
  const inputValue = document.querySelector('input').value;

  // Check if the input value is not empty
  if (inputValue.trim() !== '') {
    // 2.2 Create a new list item element
    const newListItem = document.createElement('li');

    // 2.3 Set the text content of the new list item to the input value
    newListItem.textContent = inputValue;

    // Append the new list item to the todoList
    document.getElementById('todoList').appendChild(newListItem);

    // Clear the input field
    document.querySelector('input').value = '';
  } else {
    // Alert user if input value is empty
    alert('Please enter a task.');
  }
}
    

    
