//Business Logic
  // ToDo Constructor
  function ToDo () {
    this.tasks = [];
    this.currentId = 0;
  };

  // ToDo Prototypes
  ToDo.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  };

  ToDo.prototype.addTask = function(task) {
    task.id = this.assignId();
    this.tasks.push(task)
  };

  ToDo.prototype.deleteTask = function(id) {
    for (let i = 0; i< this.tasks; i++) {
      if (this.tasks[i]) {
        if (this.tasks[i].id == id) {
          delete this.tasks[i];
          return true;
        };
      };
    };
    return false;
  };

  ToDo.prototype.findContact = function(id) {
    for (let i = 0; i < this.tasks; i++) {
      if(this.tasks[i]) {
        if(this.tasks[i].id == id) {
          return this.tasks[i];
        };
      };
    };
    return false;
  };

  // Task Constructor
  function Task (taskName) {
    this.taskName = taskName;
    this.isComplete = false;
  };

  // Task Prototypes
  Task.prototype.isComplete = function() {
    this.isComplete = true;
  };


//User Interface Logic
  //  Create ToDo Object
let todo = new ToDo();

  // Functions
function displayTasks(newTask) {
  let tasksList = $("#tasksList");
  let htmlForTaskInfo = "<li class='black' id=" + newTask.id + ">" + newTask.taskName + "<br><br><button id='"+newTask.id+"-complete' class='btn-sm btn-primary markComplete'>Mark Complete</button><button id='"+newTask.id+"-remove' class='btn-sm btn-primary remove'>Remove Task</button></li><br>";
  tasksList.append(htmlForTaskInfo);
};

function addTaskEventHandler(){
  const inputtedTask = $("#addTask").val();
  $("#addTask").val("");
  let newTask = new Task(inputtedTask);
  todo.addTask(newTask);
  displayTasks(newTask);
}; 

$(document).ready(function (){
  $("form").submit(function(event){
    event.preventDefault();
    addTaskEventHandler();

    // // Handle markComplete Event
    // $(".markComplete").click(function(){
    //   $(this).parent("li").removeClass("black");
    //   $(this).parent("li").addClass("green");
    //   // Change the button to Mark Incomplete.
    //   $(this).text("Completed!");
    //   $(this).addClass("markIncomplete");
    //   $(this).removeClass("markComplete");
    //   console.log($(this).attr("class"));
    // });
    
    // // Handle markIncomplete Event
    // $(".markIncomplete").click(function(){
    //   $(this).parent("li").removeClass("green");
    //   $(this).parent("li").addClass("black");
    //   // Change the button to Mark Incomplete.
    //   $(this).text("Mark Complete");
    //   $(this).addClass("markComplete");
    //   $(this).removeClass("markIncomplete");
    //   console.log($(this).attr("class"));
    // });
   
    // // Handle Remove Task Event
    // $(".remove").click(function() {
    //   $(this).parent("li").remove();
    //   let idfromelement = $(this).parent("li").attr("id");
    //   todo.deleteTask(idfromelement);
    // });
  });
});