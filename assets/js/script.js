//variables to identify specific objects
var containerEl = $(".container")
var dateEl = $('#currentDay')
var descriptionEl = $('.description')

//array to store task text
var tasks = [
    (9, ''),
    (10, ''),
    (11, ''),
    (12, ''),
    (13, ''),
    (14, ''),
    (15, ''),
    (16, ''),
    (17, '')
]


//function to check current time and highlight tasks accordingly 
var auditTime = function () {
    var currentHour = moment().hour();
    var descriptionEl = $('.description')

    //for loop to add classes based on time
    for (i = 0; i < descriptionEl.length; i++) {
        var currentTask = descriptionEl[i];


        if (descriptionEl[i].dataset.time < currentHour) {

            $(currentTask).addClass('past')
        }
        else if (descriptionEl[i].dataset.time > currentHour) {

            $(currentTask).addClass('future')
        }
        else if (descriptionEl[i].dataset.time = currentHour) {

            $(currentTask).addClass('present')
        }

    }
}

//function to set Current day and add to top of Page
var setDay = function () {
    var rightNow = moment().format("MMMM Do, YYYY");
    $(dateEl).text(rightNow)
}

//click listener to allow editing of task text field
$("div").on("click", '.description', function () {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("col-9")
        .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

//blur listener to remove text area and set a div 
$(".task-container").on("blur", "textarea", function () {
    //get the textarea's current value/text
    var text = $(this)
        .val()
        .trim();


    // get the parent's id attribute
    var currentID = $(this)
        .parent()
        .attr("id")

    // recreate div element
    var taskP = $("<div>")
        .addClass("description col-9")
        .text(text)
        .attr('data-time', currentID)


    // replace textarea with div element
    $(this).replaceWith(taskP);
    auditTime();
});

//function to save task when save button is clicked
$('.saveBtn').click(function () {
    var currentID = $(this)
        .parent()
        .attr("id")

    var parent = $(this).closest(".task-container").children('.description')
    var innerText = $(this).closest(".task-container").children('.description').text();

    console.log(parent)
    console.log("innerText of element " + currentID + " is " + innerText)

    console.log('Save Button Clicked' + currentID)

    tasks.splice(currentID, 1, innerText);


    localStorage.setItem("tasks", JSON.stringify(tasks));


})

//function to load tasks from localStorage and set the task text
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    //if there are no tasks in localStorage create empty array
    if (!tasks) {
        tasks = [
            (9, ''),
            (10, ''),
            (11, ''),
            (12, ''),
            (13, ''),
            (14, ''),
            (15, ''),
            (16, ''),
            (17, '')
        ]
    }

    //append saved task data to description field 
    $("#0").children('.description').text(tasks[0]);
    $("#1").children('.description').text(tasks[1]);
    $("#2").children('.description').text(tasks[2]);
    $("#3").children('.description').text(tasks[3]);
    $("#4").children('.description').text(tasks[4]);
    $("#5").children('.description').text(tasks[5]);
    $("#6").children('.description').text(tasks[6]);
    $("#7").children('.description').text(tasks[7]);
    $("#8").children('.description').text(tasks[8]);

};

auditTime();
setDay();
loadTasks();

//audits the time and sets the day every 5 minutes 
setInterval(function () {
    auditTime();
    setDay();
}, 300000);