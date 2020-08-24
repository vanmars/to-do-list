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

  ToDo.prototype.deleteTask = function(id) {
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
      const taskInput = $("#addTask").val();
      let task = new Task(taskInput);
      todo.addTask(task);
      $("#taskList").append("<li id='"+task.id+"' class='listitem black'>"+taskInput+"<button id='"+task.id+"-complete' class='btn-sm btn-primary markComplete'>Mark Complete</button><button id='"+task.id+"-remove' class='btn-sm btn-primary remove'>Remove Task</button></li>");
    }; 
    uiAddTask();

    // Handle markComplete Event
    $(".markComplete").click(function(){
      $(this).parent("li").removeClass("black");
      $(this).parent("li").addClass("green");
      // Change the button to Mark Incomplete.
      $(this).text("Completed!");
      $(this).addClass("markIncomplete");
      $(this).removeClass("markComplete");
      console.log($(this).attr("class"));
    })
    
    // Handle markIncomplete Event
    $(".markIncomplete").click(function(){
      $(this).parent("li").removeClass("green");
      $(this).parent("li").addClass("black");
      // Change the button to Mark Incomplete.
      $(this).text("Mark Complete");
      $(this).addClass("markComplete");
      $(this).removeClass("markIncomplete");
      console.log($(this).attr("class"));
    })
   

    //Remove Task User Interface 
    $(".remove").click(function() {
      $(this).parent("li").remove();
      let idfromelement = $(this).parent("li").attr("id");
      todo.deleteTask(idfromelement);
      // let id = $(this).parent(task.id);
      // console.log(id);
      // todo.deleteTask($(this).parent(id));
      
    });
  });
 
});