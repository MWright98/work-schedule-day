var containerEl = $(".container")
var times = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM']

var dateEl = $('#currentDay')
var tasks = {};
//console.log(descriptionEl.length);
//console.log(descriptionEl[0])
//console.log(descriptionEl[1])
//console.log(descriptionEl[2])

var auditTime = function () {
    var currentHour = moment().hour();
    var descriptionEl = $('.description')
    console.log(currentHour);

    for (i = 0; i < descriptionEl.length; i++) {
        var currentTask = descriptionEl[i];
        //console.log(currentTask);

        if (descriptionEl[i].dataset.time < currentHour) {
            // console.log("PAST")
            $(currentTask).addClass('past')
        }
        else if (descriptionEl[i].dataset.time > currentHour) {
            // console.log("Future")
            $(currentTask).addClass('future')
        }
        else if (descriptionEl[i].dataset.time = currentHour) {
            // console.log('Present')
            $(currentTask).addClass('present')
        }

    }
}

var setDay = function () {
    var rightNow = moment().format("MMMM Do, YYYY");
    $(dateEl).text(rightNow)
}




$(".task-container").on("blur", "textarea", function () {
    //gets current elements id
    //console.log($(this).parent().attr("id"));

    //get the textarea's current value/text
    var text = $(this)
        .val()
        .trim();
    console.log(text);

    // get the parent ul's id attribute
    var currentID = $(this)
        .parent()
        .attr("id")

    console.log(currentID);
    // get the task's position in the list of other li elements
    // var index = $(this)
    //     .closest(".description")
    //     .index();

    //tasks[status][index].text = text;
    // saveTasks();

    // recreate p element
    var taskP = $("<div>")
        .addClass("description col-9")
        .text(text)
        .attr('data-time', currentID)

    // replace textarea with p element
    $(this).replaceWith(taskP);
    auditTime();
});

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

// $(".saveBtn").on('click'), function () {
//     $('description').text()
// }

// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };




auditTime();
setDay();

//make tasks editable
//

//      DONE
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future



// WHEN I click into a time block
// THEN I can enter an event


//      TO DO
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist