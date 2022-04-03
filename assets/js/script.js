var containerEl = $(".container")
var times = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM']
var descriptionEl = $('.description')
var dateEl = $('#currentDay')
//console.log(descriptionEl.length);
//console.log(descriptionEl[0])
//console.log(descriptionEl[1])
//console.log(descriptionEl[2])

var auditTime = function () {
    var currentHour = moment().hour();
    console.log(currentHour);

    for (i = 0; i < descriptionEl.length; i++) {
        var currentTask = descriptionEl[i];
        console.log(currentTask);

        if (descriptionEl[i].dataset.time < currentHour) {
            console.log("PAST")
            $(currentTask).addClass('past')
        }
        else if (descriptionEl[i].dataset.time > currentHour) {
            console.log("Future")
            $(currentTask).addClass('future')
        }
        else if (descriptionEl[i].dataset.time = currentHour) {
            console.log('Present')
            $(currentTask).addClass('present')
        }

    }
}

var setDay = function () {
    var rightNow = moment().format("MMMM Do, YYYY");
    $(dateEl).text(rightNow)
}

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


//      TO DO
// WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist