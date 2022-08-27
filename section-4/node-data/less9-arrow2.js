const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: true
    }, {
        text:'Film course',
        completed: true
    }],
    getTasksToDo () {
        const tasksToDo = this.tasks.filter((task) => task.completed === false)
    }
}

console.log(tasks.getTasksToDo())