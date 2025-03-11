let tasks = []; // Array to store tasks
let taskId = 1; // Auto-incrementing ID

// CREATE: Add a new task
function addTask(name, description) {
    const task = { id: taskId++, name, description };
    tasks.push(task);
    console.log(`Task added:`, task);
}

// READ: View all tasks
function viewTasks() {
    console.log("Task List:", tasks);
    return tasks;
}

// UPDATE: Modify a task by ID
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`Task updated:`, task);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// DELETE: Remove a task by ID
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log(`Task deleted:`, deletedTask);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}


