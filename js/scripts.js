//  Tasks
// 1. Create a constructor for To-Do Object X
// 2. Create a constructor for task items (description) X
// 3. Be able to add tasks to to-do object (to-do prototypes) X
// 5. Add a task item method for saying whether the task is complete X
// 6. Create the user interface with a form for adding tasks, button for showing a task is compelted.
// 7. Display area for showing the results


//Business Logic
  function ToDo() {
    this.tasks = [];
    this.currentId=0;
  };
  
  ToDo.prototype.addTask = function(task) {
    task.id=this.assignId();
    this.tasks.push(task)
  };

  ToDo.prototype.deleteTask = function(task) {
    for (let i=0; i<this.tasks;i++) {
      if (this.tasks[i]) {
        if (this.tasks[i].id == id){
          delete this.tasks[i];
          return true;
        }
      }
    };
    return false;
  };

  ToDo.prototype.assignId = function() {
    this.currentId +=1;
    return this.currentId;
  };

  function Task(taskName) {
    this.taskName = taskName;
    this.isComplete = false;
  };

  Task.prototype.isComplete = function() {
    this.isComplete = true;
  };

//  Create ToDo Object
let todo = new ToDo();





//User Interface Logic
$(document).ready(function (){
  $("form").submit(function(event){
    event.preventDefault();
    // Function for Click Events
    function uiAddTask(){
      const itemInput = $("#addTask").val();
      let item = new Task(itemInput)
      todo.addTask(item)
      $("#taskList").html("<li>"+itemInput+"</li><button class='btn-sm btn-primary'>'Completed!'</button><button class='btn-sm btn-primary'>Remove Task</button>");
    }; 
    uiAddTask();
  })
});