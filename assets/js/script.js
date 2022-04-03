var containerEl = $(".container")
var times = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM']
var taskEl = document.querySelector('.task-container')
var descriptionEl = $('.description')
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

auditTime();

